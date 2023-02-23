from functools import lru_cache

from django import forms
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import status
from service_objects.errors import NotFound
from service_objects.errors import AccessDenied
from service_objects.errors import ValidationError
from service_objects.fields import ModelField
from service_objects.services import ServiceWithResult

from models_app.models import Event
from models_app.models import User


class EventApproveServices(ServiceWithResult):
    id = forms.IntegerField()
    user = ModelField(User)

    custom_validations = ["event_presence", "check_user", "check_event_status"]

    def process(self):
        self.run_custom_validations()
        if self.is_valid():
            self.result = self._event_approve
        return self

    @property
    def _event_approve(self):
        self._get_event.status = Event.APPROVED
        self._get_event.save()
        return f"Status event with id {self.cleaned_data['id']} changed successfully"

    @property
    @lru_cache
    def _get_event(self):
        try:
            return Event.objects.get(id=self.cleaned_data['id'])
        except ObjectDoesNotExist:
            return None

    def event_presence(self):
        if not self._get_event:
            raise NotFound(message=f"Event with if {self.cleaned_data['id']} not found",
                           response_status=status.HTTP_404_NOT_FOUND)

    def check_user(self):
        if self.cleaned_data["user"] != self._get_event.user:
            raise AccessDenied(message="Access denied", response_status=status.HTTP_403_FORBIDDEN)

    def check_event_status(self):
        if self._get_event.status == Event.APPROVED:
            raise ValidationError(message="The event already has a status of approved",
                                  response_status=status.HTTP_400_BAD_REQUEST)
