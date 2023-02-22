from django import forms
from rest_framework import status
from service_objects.errors import ValidationError
from service_objects.fields import ModelField
from service_objects.services import ServiceWithResult, ServiceOutcome

from api.services.selection.create import SelectionCreateServices
from models_app.models import User, Event


class EventCreateServices(ServiceWithResult):
    title = forms.CharField(max_length=100)
    description = forms.CharField(max_length=100)
    date = forms.DateTimeField(required=False)
    user = ModelField(User)

    custom_validations = ["validate_title_post", ]

    def process(self):
        self.run_custom_validations()
        self.result = {
            "event": self._create_event,
            "selections": [],
        }
        self._create_selections()
        return self

    @property
    def _create_event(self):
        return Event.objects.create(
            title=self.cleaned_data["title"],
            description=self.cleaned_data["description"],
            user=self.cleaned_data["user"]
        )

    def _create_selections(self):
        if self.data.get("selection_count", None):
            for index in range(int(self.data["selection_count"])):
                self.result["selections"].append(
                    ServiceOutcome(SelectionCreateServices, {
                        "title": self.data[f"selection_{index}_title"],
                        "event": self.result["event"],
                    }).result
                )

    def validate_title_post(self):
        if len(self.cleaned_data.get('title')) < 5:
            self.response_status = status.HTTP_400_BAD_REQUEST
            raise ValidationError(message='Title too short (at least 5 characters)',
                                  response_status=self.response_status)
        elif len(self.cleaned_data.get('title')) > 100:
            self.response_status = status.HTTP_400_BAD_REQUEST
            raise ValidationError(message='Title too long (at least 100 characters)',
                                  response_status=self.response_status)
