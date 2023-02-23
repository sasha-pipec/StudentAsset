import json

from django import forms
from django.core.paginator import Paginator
from service_objects.services import ServiceWithResult

from conf.settings.rest_framework import REST_FRAMEWORK
from models_app.models import Post


class PostListServices(ServiceWithResult):
    order = forms.CharField(required=False)
    page = forms.IntegerField(required=False, min_value=1)
    per_page = forms.IntegerField(required=False, min_value=1)

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
    def _events(self):
        return Post.objects.all().order_by(self.cleaned_data["order"] or "id")
