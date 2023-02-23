from service_objects.services import ServiceWithResult
from service_objects.fields import ModelField
from models_app.models.user.models import User
from models_app.models.thread.models import Thread
from django import forms


class ThreadCreateService(ServiceWithResult):
    title = forms.CharField(max_length=100, min_length=5)
    description = forms.CharField(max_length=255)
    user = ModelField(User)

    def process(self):
        self.result = self._create_thread
        return self

    @property
    def _create_thread(self):
        return Thread.objects.create(
            title=self.cleaned_data['title'],
            description=self.cleaned_data['description'],
            user=self.cleaned_data['user']
        )
