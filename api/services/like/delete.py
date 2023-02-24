from django import forms
from rest_framework import status
from service_objects.fields import ModelField
from service_objects.services import ServiceWithResult

from service_objects.errors import ValidationError

from models_app.models import User
from models_app.models import Like
from models_app.models import Post


class LikeDeleteServices(ServiceWithResult):
    id = forms.IntegerField()
    user = ModelField(User)

    custom_validations = ["user_rights"]

    def process(self):
        self.run_custom_validations()
        self._like.delete()
        return self

    @property
    def _like(self):
        return Like.objects.get(
            user=self.cleaned_data["user"],
            post=self._post,
        )

    @property
    def _post(self):
        return Post.objects.get(id=self.cleaned_data["id"])

    def user_rights(self):
        if self.cleaned_data["user"] != self._like.user:
            raise ValidationError(
                message="You didn't like this post",
                response_status=status.HTTP_400_BAD_REQUEST
            )
