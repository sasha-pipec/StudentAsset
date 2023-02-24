from django import forms
from rest_framework import status
from service_objects.errors import AccessDenied
from service_objects.fields import ModelField
from service_objects.services import ServiceWithResult
from models_app.models import Post
from models_app.models import User


class PostCreateServices(ServiceWithResult):
    title = forms.CharField(max_length=100, min_length=5)
    description = forms.CharField(required=False)
    image = forms.ImageField()
    user = ModelField(User)

    custom_validations = ["check_rights", ]

    def process(self):
        self.run_custom_validations()
        self.result = Post.objects.create(
            title=self.cleaned_data['title'],
            description=self.cleaned_data.get('description', ""),
            image=self.cleaned_data["image"],
            user=self.cleaned_data['user']
        )
        return self

    def check_rights(self):
        if self.cleaned_data["user"].role not in [User.chairman, User.stud_asset]:
            raise AccessDenied(message="Sorry but you don't have rights on create Post",
                               response_status=status.HTTP_403_FORBIDDEN)