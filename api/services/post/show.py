from django import forms
from service_objects.services import ServiceWithResult

from models_app.models import Post


class PostShowServices(ServiceWithResult):
    id = forms.IntegerField()

    def process(self):
        return self

    @property
    def _post(self):
        return Post.objects.get()
