from functools import lru_cache

from django import forms
from django.db.models import Count
from rest_framework import status
from service_objects.fields import ModelField
from service_objects.services import ServiceWithResult
from service_objects.errors import AccessDenied

from models_app.models import User
from models_app.models import Post


class PostChangeServices(ServiceWithResult):
    id = forms.IntegerField()
    title = forms.CharField(max_length=100, min_length=5, required=False)
    description = forms.CharField(required=False)
    image = forms.ImageField(required=False)
    user = ModelField(User)

    custom_validations = ["check_rights", ]

    def process(self):
        self.run_custom_validations()
        self.result = self._change_post
        return self

    @property
    def _change_post(self):
        if self.cleaned_data.get("title"):
            self._post.title = self.cleaned_data["title"]
        if self.cleaned_data.get("description"):
            self._post.description = self.cleaned_data["description"]
        if self.cleaned_data.get("image"):
            self._post.image = self.cleaned_data["image"]
        self._post.save()
        return self._post

    @property
    @lru_cache
    def _post(self):
        return Post.objects.annotate(total_likes=Count("voting_posts")).get(id=self.cleaned_data["id"])

    def check_rights(self):
        if self.cleaned_data["user"].role not in [User.chairman, User.stud_asset]:
            raise AccessDenied(message="Sorry but you don't have rights on change this Post",
                               response_status=status.HTTP_403_FORBIDDEN)
