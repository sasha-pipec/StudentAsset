import json
from functools import lru_cache
from datetime import datetime, timedelta
import locale

from django import forms
from django.core.exceptions import ValidationError
from django.core.paginator import Paginator
from django.db.models import Count
from service_objects.services import ServiceWithResult

from conf.settings.rest_framework import REST_FRAMEWORK
from models_app.models import Post

locale.setlocale(locale.LC_ALL, 'ru_RU.UTF-8')


class PostListServices(ServiceWithResult):
    order = forms.CharField(required=False)
    page = forms.IntegerField(required=False, min_value=1)
    per_page = forms.IntegerField(required=False, min_value=1)
    filter_date = forms.CharField(required=False)

    def process(self):
        self._paginated_regions()
        return self

    def _paginated_regions(self):
        page = self.cleaned_data.get("page") or 1
        try:
            events = self._events.filter(date__range=[f"{self.cleaned_data['filter_date']} 00:00:00",
                                                      f"{self.cleaned_data['filter_date']} 23:59:59"])
        except ValidationError:
            events = self._events
        paginator = Paginator(
            events,
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
            'date': self._date,
        }

    @property
    @lru_cache
    def _events(self):
        return Post.objects.all().order_by(self.cleaned_data["order"] or "id").annotate(
            total_likes=Count("voting_posts"))

    @lru_cache
    def _check_date(self, date):
        for event in self._events.values():
            if event.get("date").strftime("%Y-%m-%d") == date.strftime("%Y-%m-%d"):
                return True
        return False

    @property
    def _date(self):
        array_date = []
        for i in range(3):
            next_month = datetime.now() + timedelta(days=30 * i)
            month_dict = {
                "month": f"{next_month.strftime('%B').lower()} {next_month.year}",
                "days": []
            }
            days_in_month = (next_month.replace(day=28) + timedelta(days=4)).replace(day=1) - timedelta(days=1)
            for day in range(1, days_in_month.day + 1):
                day_dict = {
                    "date": next_month.replace(day=day).strftime("%Y-%m-%d"),
                    "isActive": self._check_date(next_month.replace(day=day))
                }
                month_dict["days"].append(day_dict)
            array_date.append(month_dict)
        return array_date
