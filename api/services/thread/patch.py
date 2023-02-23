from functools import lru_cache

from rest_framework import status
from service_objects.errors import ValidationError
from service_objects.services import ServiceWithResult
from service_objects.fields import ModelField
from models_app.models.user.models import User
from models_app.models.thread.models import Thread
from django import forms


class ThreadUpdateService(ServiceWithResult):
    id = forms.IntegerField()
    title = forms.CharField(min_length=5, max_length=100, required=False)
    description = forms.CharField(max_length=255, required=False)
    user = ModelField(User)

    custom_validations = ["check_thread_status"]

    def process(self):
        self.run_custom_validations()
        self.result = self._update_thread
        return self

    @property
    def _update_thread(self):
        thread = self._get_thread
        if 'title' in self.cleaned_data and self.cleaned_data['title']:
            thread.title = self.cleaned_data['title']
        if 'description' in self.cleaned_data and self.cleaned_data['description']:
            thread.description = self.cleaned_data['description']
        thread.save()
        return thread

    @property
    @lru_cache
    def _get_thread(self):
        return Thread.objects.get(id=self.cleaned_data['id'])

    def check_thread_status(self):
        if self._get_thread.status != Thread.OPEN:
            raise ValidationError(message="The thread has a status of close, cant be change",
                                  response_status=status.HTTP_400_BAD_REQUEST)
