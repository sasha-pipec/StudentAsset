from django import forms
from service_objects.services import ServiceWithResult
from models_app.models import Like, User
from models_app.models import Post


class LikeShowServices(ServiceWithResult):
    id = forms.IntegerField()
    token = forms.CharField()

    def process(self):
        self.result = True if self._like else False
        return self

    @property
    def _like(self):
        return Like.objects.filter(
            user=User.objects.get(API_Key=self.cleaned_data["token"]),
            post=self._post,
        )

    @property
    def _post(self):
        return Post.objects.get(id=self.cleaned_data["id"])

