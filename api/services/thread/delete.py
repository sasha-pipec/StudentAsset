from functools import lru_cache

from rest_framework import status
from service_objects.errors import ValidationError
from service_objects.services import ServiceWithResult
from service_objects.fields import ModelField
from models_app.models.user.models import User
from models_app.models.thread.models import Thread
from django import forms


class ThreadDeleteService(ServiceWithResult):
    id = forms.IntegerField()
    user = ModelField(User)

    custom_validations = ["check_thread_status"]

    def process(self):
        self.run_custom_validations()
        self.result = self._delete_thread
        return self

    @property
    def _delete_thread(self):
        self._get_thread.delete()
        return f"Thread with id {self.cleaned_data['id']} was successfully deleted"

    @property
    @lru_cache
    def _get_thread(self):
        return Thread.objects.get(id=self.cleaned_data['id'], user=self.cleaned_data['user'])

    def check_thread_status(self):
        if self._get_thread.status != Thread.OPEN:
            raise ValidationError(message="The thread has a status of close, cant be delete",
                                  response_status=status.HTTP_400_BAD_REQUEST)
