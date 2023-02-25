from functools import lru_cache

from rest_framework import status
from service_objects.errors import ValidationError
from service_objects.services import ServiceWithResult
from service_objects.fields import ModelField
from models_app.models.user.models import User
from models_app.models.thread.models import Thread
from django import forms

ROLES = [User.stud_asset, User.chairman]


class ThreadPinnedService(ServiceWithResult):
    id = forms.IntegerField()
    user = ModelField(User)

    custom_validations = ["check_thread_status", "check_user"]

    def process(self):
        self.run_custom_validations()
        self.result = self._pinned_thread
        return self

    @property
    def _pinned_thread(self):
        if self._get_thread.pinned:
            self._get_thread.pinned = False
            self._get_thread.save()
            return f"Thread with id {self.cleaned_data['id']} successfully unpinned"
        self._get_thread.pinned = True
        self._get_thread.save()
        return f"Thread with id {self.cleaned_data['id']} successfully pinned"

    @property
    @lru_cache
    def _get_thread(self):
        return Thread.objects.get(id=self.cleaned_data['id'])

    def check_user(self):
        if self.cleaned_data['user'].role not in ROLES:
            raise ValidationError(message="Access denied", response_status=status.HTTP_403_FORBIDDEN)

    def check_thread_status(self):
        if self._get_thread.status != Thread.CLOSE:
            raise ValidationError(message="The thread has status open, cant pinned",
                                  response_status=status.HTTP_400_BAD_REQUEST)
