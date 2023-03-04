import json
from functools import lru_cache

from django import forms
from django.core.paginator import Paginator
from django.db.models import Value
from service_objects.services import ServiceWithResult
from service_objects.fields import ModelField

from conf.settings.rest_framework import REST_FRAMEWORK
from models_app.models import Thread, Comment, User


def can_be_deleted_and_changing(comments, user):
    for comment in comments:
        if comment.user == user:
            comment.can_be_changed = True
            if not Comment.objects.filter(answer_to=comment.pk):
                comment.can_be_deleted = True
    return comments


class CommentListService(ServiceWithResult):
    id = forms.IntegerField()
    user = ModelField(User)
    page = forms.IntegerField(required=False, min_value=1)
    per_page = forms.IntegerField(required=False, min_value=1)

    custom_validations = []

    def process(self):
        self._paginated_comments()
        return self

    def _paginated_comments(self):
        page = self.cleaned_data.get('page') or 1
        paginator = Paginator(
            self._comments,
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

    @lru_cache
    def _get_thread(self):
        return Thread.objects.get(id=self.cleaned_data['id'])

    @property
    def _comments(self):
        comments = Comment.objects.filter(thread=self._get_thread(), answer_to=None).annotate(
            can_be_deleted=Value(False), can_be_changed=Value(False)
        )
        if self.cleaned_data['user']:
            comments = can_be_deleted_and_changing(comments, self.cleaned_data['user'])
        return comments
