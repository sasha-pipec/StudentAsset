from functools import lru_cache

from django import forms
from rest_framework import status
from service_objects.errors import AccessDenied
from service_objects.errors import ValidationError
from service_objects.fields import ModelField
from service_objects.services import ServiceWithResult

from models_app.models import Event
from models_app.models import User


class EventDeleteServices(ServiceWithResult):
    id = forms.IntegerField()
    user = ModelField(User)

    custom_validations = ["check_user", ]

    def process(self):
        self.run_custom_validations()
        self.result = self._event_cancel
        return self

    @property
    def _event_cancel(self):
        self._event.delete()
        return f"Event with id {self.cleaned_data['id']} was successfully rejected and deleted"

    @property
    @lru_cache
    def _event(self):
        return Event.objects.get(id=self.cleaned_data['id'])

    def check_user(self):
        if self.cleaned_data["user"].role not in [User.chairman, User.stud_asset]:
            raise AccessDenied(message="Access denied", response_status=status.HTTP_403_FORBIDDEN)

