from functools import lru_cache

from django import forms
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import status
from service_objects.errors import NotFound
from service_objects.errors import ValidationError
from service_objects.fields import ModelField
from service_objects.services import ServiceWithResult

from models_app.models import User
from models_app.models import Vote

from models_app.models import Selection


class EventVoteServices(ServiceWithResult):
    id = forms.IntegerField()
    user = ModelField(User)

    custom_validations = ["selection_presence", "vote_presence"]

    def process(self):
        self.run_custom_validations()
        if self.is_valid():
            self.result = self._create_vote
        return self

    @property
    def _create_vote(self):
        return Vote.objects.create(
            user=self.cleaned_data["user"],
            selection=self._get_selection
        )

    @property
    @lru_cache
    def _get_selection(self):
        try:
            return Selection.objects.get(id=self.cleaned_data["id"])
        except ObjectDoesNotExist:
            return None

    def vote_presence(self):
        if Vote.objects.filter(user=self.cleaned_data["user"], selection=self._get_selection).exists():
            raise ValidationError(message="Vote with this user and selection exists",
                                  response_status=status.HTTP_400_BAD_REQUEST)

    def selection_presence(self):
        if not self._get_selection:
            raise NotFound(message=f"Selection with id {self.cleaned_data['id']} not found",
                           response_status=status.HTTP_200_OK)
