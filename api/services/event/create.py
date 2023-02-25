from django import forms
from rest_framework import status
from service_objects.errors import ValidationError
from service_objects.fields import ModelField
from service_objects.services import ServiceWithResult, ServiceOutcome

from api.services.selection.create import SelectionCreateServices
from models_app.models import User, Event


class EventCreateServices(ServiceWithResult):
    title = forms.CharField(max_length=100, min_length=5)
    description = forms.CharField(max_length=100)
    date = forms.DateTimeField(required=False)
    user = ModelField(User)

    custom_validations = ["check_selection_count", "coincidence_selection_count"]

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

    def check_selection_count(self):
        if not self.data.get("selection_count", None):
            raise ValidationError(message="You did not specify the number of possible voting options - selection_count",
                                  response_status=status.HTTP_400_BAD_REQUEST)

    def coincidence_selection_count(self):
        count = len(
            [1 for index in range(int(self.data["selection_count"])) if self.data.get(f"selection_{index}_title")]
        )
        if count != int(self.data["selection_count"]):
            raise ValidationError(message="The number of responses does not match the number sent",
                                  response_status=status.HTTP_400_BAD_REQUEST)
