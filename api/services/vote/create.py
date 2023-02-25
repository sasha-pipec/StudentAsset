from functools import lru_cache

from django import forms
from rest_framework import status
from service_objects.errors import ValidationError
from service_objects.fields import ModelField
from service_objects.services import ServiceWithResult

from models_app.models import User
from models_app.models import Vote
from models_app.models import Event

from models_app.models import Selection


class EventVoteServices(ServiceWithResult):
    id = forms.IntegerField()
    user = ModelField(User)

    custom_validations = ["vote_presence", "check_status_event", "check_vote_in_event"]

    def process(self):
        self.run_custom_validations()
        self.result = self._create_vote
        return self

    @property
    def _create_vote(self):
        return Vote.objects.create(
            user=self.cleaned_data["user"],
            selection=self._selection
        )

    @property
    @lru_cache
    def _selection(self):
        return Selection.objects.select_related("event").get(id=self.cleaned_data["id"])

    def vote_presence(self):
        if Vote.objects.filter(user=self.cleaned_data["user"], selection=self._selection).exists():
            raise ValidationError(message="Vote with this user and selection exists",
                                  response_status=status.HTTP_400_BAD_REQUEST)

    def check_status_event(self):
        if self._selection.event.status != Event.APPROVED:
            raise ValidationError(message="The event is not in the approved status",
                                  response_status=status.HTTP_400_BAD_REQUEST)

    def check_vote_in_event(self):
        if Vote.objects.filter(user=self.cleaned_data["user"],
                               selection__in=Selection.objects.filter(event=self._selection.event)):
            raise ValidationError(message="You have already voted for this event",
                                  response_status=status.HTTP_400_BAD_REQUEST)
