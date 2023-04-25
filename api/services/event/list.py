import json
from functools import lru_cache

from django import forms
from django.core.paginator import Paginator
from django.db.models import Value
from service_objects.services import ServiceWithResult

from conf.settings.rest_framework import REST_FRAMEWORK
from models_app.models import Event, Vote, User

from django.db.models import Subquery, OuterRef


class EventListServices(ServiceWithResult):
    order = forms.CharField(required=False)
    filter = forms.CharField(required=False)
    page = forms.IntegerField(required=False, min_value=1)
    per_page = forms.IntegerField(required=False, min_value=1)
    token = forms.CharField(required=False)

    def process(self):
        self._paginated_regions()
        return self

    def _paginated_regions(self):
        page = self.cleaned_data.get('page') or 1
        paginator = Paginator(
            self._events,
            self.cleaned_data.get("per_page") or REST_FRAMEWORK["PAGE_SIZE"],
        )
        page_info = {
            'has_previous': paginator.get_page(page).has_previous(),
            'has_next': paginator.get_page(page).has_next(),
            'num_page': json.dumps(page),
        }
        self.result = {
            'page_info': page_info,
            'object_list': paginator.page(page).object_list,
            'page_range': json.dumps([str(p) for p in paginator.page_range]),
        }

    @property
    def _user(self):
        return User.objects.get(API_Key=self.cleaned_data["token"])

    @property
    def _events(self):
        queryset = Event.objects.filter(status=Event.APPROVED).order_by(self.cleaned_data["order"] or "id")
        if self.cleaned_data.get("token"):
            queryset = queryset.exclude(
                events__in=Vote.objects.filter(user=self._user)
            )
        return queryset
