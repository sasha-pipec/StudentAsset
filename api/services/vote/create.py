from functools import lru_cache

from django import forms
from rest_framework import status
from service_objects.errors import ValidationError
from service_objects.fields import ModelField
from service_objects.services import ServiceWithResult

from models_app.models import User
from models_app.models import Vote
from models_app.models import Event


class EventVoteServices(ServiceWithResult):
    id = forms.IntegerField()
    user = ModelField(User)
    vote = forms.CharField()

    custom_validations = ["check_status_event", "check_vote_user"]

    def process(self):
        self.run_custom_validations()
        self.result = self._create_vote
        return self

    @property
    def _create_vote(self):
        return Vote.objects.create(
            user=self.cleaned_data["user"],
            choice=Vote.LIKE if self.cleaned_data["vote"] == "like" else Vote.DISLIKE
        )

    @property
    def _event(self):
        return Event.objects.get(id=self.cleaned_data["id"])

    def check_status_event(self):
        if self._event.status != Event.APPROVED:
            raise ValidationError(message="The event is not in the approved status",
                                  response_status=status.HTTP_400_BAD_REQUEST)

    def check_vote_user(self):
        if Vote.objects.filter(user=self.cleaned_data["user"]).exists():
            raise ValidationError(message="You have already voted for this event",
                                  response_status=status.HTTP_400_BAD_REQUEST)
