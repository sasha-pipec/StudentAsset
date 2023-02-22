from django import forms

from service_objects.fields import ModelField
from service_objects.services import ServiceWithResult

from models_app.models import Event, Selection


class SelectionCreateServices(ServiceWithResult):
    title = forms.CharField(max_length=100)
    event = ModelField(Event)

    def process(self):
        self.result = self._create_selection
        return self

    @property
    def _create_selection(self):
        return Selection.objects.create(
            title=self.cleaned_data["title"],
            event=self.cleaned_data["event"],
        )

