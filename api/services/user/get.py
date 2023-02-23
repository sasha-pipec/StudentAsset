from django import forms
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import status
from service_objects.errors import NotFound
from service_objects.services import ServiceWithResult
from models_app.models.user.models import User
import requests

ROLES = {
    'Студент': User.student
}


class UserGetService(ServiceWithResult):
    username = forms.CharField()
    password = forms.CharField()

    def process(self):
        self.result = self._get_user
        return self

    @property
    def _get_user(self):
        try:
            return User.objects.get(username=self.cleaned_data['username'], password=self.cleaned_data['password'])
        except ObjectDoesNotExist:
            return self._create_user

    @property
    def _create_user(self):
        request = requests.post(
            "https://study-back.tgiek.ru/api/auth/login",
            data={'login': self.cleaned_data['username'], 'password': self.cleaned_data['password']}
        ).json()
        if 'user' in request:
            return User.objects.create(
                username=self.cleaned_data['username'],
                password=self.cleaned_data['password'],
                group=request['user']['groups'][0]['codename'],
                first_name=request['user']['first_name'],
                last_name=request['user']['last_name'],
                role=ROLES.get(request['role'], User.student),
                API_Key=request['token'],
            )
        raise NotFound(message='Invalid login or password', response_status=status.HTTP_400_BAD_REQUEST)
