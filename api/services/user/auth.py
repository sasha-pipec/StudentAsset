from django import forms
from service_objects.services import ServiceWithResult

from models_app.models import User


class UserAuthService(ServiceWithResult):
    API_Key = forms.CharField()

    def process(self):
        self.result = self._user
        return self

    @property
    def _user(self):
        return User.objects.get(API_Key=self.cleaned_data["API_Key"])
