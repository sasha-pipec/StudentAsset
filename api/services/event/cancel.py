from functools import lru_cache

from django import forms
from rest_framework import status
from service_objects.errors import AccessDenied
from service_objects.errors import ValidationError
from service_objects.fields import ModelField
from service_objects.services import ServiceWithResult

from models_app.models import Event
from models_app.models import User


class EventCancelServices(ServiceWithResult):
    id = forms.IntegerField()
    user = ModelField(User)

    custom_validations = ["event_presence", "check_user", "check_event_status"]

    def process(self):
        self.run_custom_validations()
        if self.is_valid():
            self.result = self._event_cancel
        return self

    @property
    def _event_cancel(self):
        self._get_event.delete()
        return f"Event with id {self.cleaned_data['id']} was successfully rejected and deleted"

    @property
    @lru_cache
    def _get_event(self):
        return Event.objects.get(id=self.cleaned_data['id'])

    def check_user(self):
        if self.cleaned_data["user"].role not in [User.chairman, User.stud_asset]:
            raise AccessDenied(message="Access denied", response_status=status.HTTP_403_FORBIDDEN)

    def check_event_status(self):
        if self._get_event.status == Event.APPROVED:
            raise ValidationError(message="The event has a status of approved",
                                  response_status=status.HTTP_400_BAD_REQUEST)
