from functools import lru_cache

from django import forms
from django.core.exceptions import ObjectDoesNotExist
from service_objects.fields import ModelField
from service_objects.services import ServiceWithResult

from models_app.models import User
from models_app.models import Vote

from models_app.models import Selection


class EventVoteServices(ServiceWithResult):
    id = forms.IntegerField()
    user = ModelField(User)

    def process(self):
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
