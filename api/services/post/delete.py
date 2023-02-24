from django import forms
from rest_framework import status
from service_objects.errors import AccessDenied
from service_objects.fields import ModelField
from service_objects.services import ServiceWithResult

from models_app.models import User
from models_app.models import Post


class PostDeleteServices(ServiceWithResult):
    id = forms.IntegerField()
    user = ModelField(User)

    custom_validations = ["check_rights", ]

    def process(self):
        self.run_custom_validations()
        self._post.delete()
        return self

    @property
    def _post(self):
        return Post.objects.get(id=self.cleaned_data["id"])

    def check_rights(self):
        if self.cleaned_data["user"].role not in [User.chairman, User.stud_asset]:
            raise AccessDenied(message="Sorry but you don't have rights on delete this Post",
                               response_status=status.HTTP_403_FORBIDDEN)
