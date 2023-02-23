from django import forms
from django.db.models import Count
from service_objects.fields import ModelField
from service_objects.services import ServiceWithResult

from models_app.models import User
from models_app.models import Like
from models_app.models import Post


class LikeCreateServices(ServiceWithResult):
    id = forms.IntegerField()
    user = ModelField(User)

    def process(self):
        self.result = self._create_like
        return self

    @property
    def _create_like(self):
        return Like.objects.create(
            post=self._get_post,
            user=self.cleaned_data["user"]
        )

    @property
    def _get_post(self):
        return Post.objects.annotate(total_likes=Count("voting_posts")).get(id=self.cleaned_data["id"])
