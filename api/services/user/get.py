from django import forms
from rest_framework.exceptions import NotFound
from django.core.exceptions import ObjectDoesNotExist
from service_objects.services import ServiceWithResult
from models_app.models.user.models import User
import requests


class UserGetService(ServiceWithResult):
    username = forms.CharField()
    password = forms.CharField()

    custom_validations = []

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
                role=request['role'],
                API_Key=request['token'],
            )
        raise NotFound('Invalid login or password')
