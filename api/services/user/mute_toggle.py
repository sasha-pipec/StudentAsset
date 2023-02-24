from functools import lru_cache

from django import forms
from rest_framework import status
from service_objects.fields import ModelField
from service_objects.services import ServiceWithResult
from models_app.models import User
from service_objects.errors import AccessDenied


class UserMuteToggleService(ServiceWithResult):
    id = forms.IntegerField()
    user = ModelField(User)

    custom_validations = ["check_rights"]

    def process(self):
        self.run_custom_validations()
        if self._user.is_muted:
            self._unmute()
        else:
            self._mute()
        self._user.save()
        self.result = self._user
        return self

    def _mute(self):
        self._user.is_muted = True

    def _unmute(self):
        self._user.is_muted = False

    @property
    @lru_cache
    def _user(self):
        return User.objects.get(id=self.cleaned_data["id"])

    def check_rights(self):
        if self.cleaned_data["user"].role not in [User.chairman, User.stud_asset]:
            raise AccessDenied(message="Sorry but you don't have rights on mute user",
                               response_status=status.HTTP_403_FORBIDDEN)
