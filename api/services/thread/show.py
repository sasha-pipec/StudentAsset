from service_objects.services import ServiceWithResult
from service_objects.fields import ModelField
from models_app.models.user.models import User
from models_app.models.thread.models import Thread
from django import forms


class ThreadShowService(ServiceWithResult):
    id = forms.IntegerField()
    user = ModelField(User)

    def process(self):
        self.result = self._get_thread
        return self

    @property
    def _get_thread(self):
        return Thread.objects.get(id=self.cleaned_data['id'])
