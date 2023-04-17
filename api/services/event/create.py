from django import forms
from service_objects.fields import ModelField
from service_objects.services import ServiceWithResult

from models_app.models import User, Event


class EventCreateServices(ServiceWithResult):
    title = forms.CharField(max_length=100, min_length=5)
    description = forms.CharField()
    date = forms.DateTimeField(required=False)
    user = ModelField(User)

    def process(self):
        self.result = self._create_event
        return self

    @property
    def _create_event(self):
        return Event.objects.create(
            title=self.cleaned_data["title"],
            description=self.cleaned_data["description"],
            user=self.cleaned_data["user"]
        )
