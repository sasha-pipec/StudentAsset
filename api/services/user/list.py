from rest_framework import status
from service_objects.errors import AccessDenied
from service_objects.fields import ModelField
from service_objects.services import ServiceWithResult
from models_app.models import User


class UserListService(ServiceWithResult):
    user = ModelField(User)

    custom_validations = ["check_rights"]

    def process(self):
        self.run_custom_validations()
        self.result = self._users
        return self

    @property
    def _users(self):
        return User.objects.all()

    def check_rights(self):
        if self.cleaned_data["user"].role not in [User.chairman, User.stud_asset]:
            raise AccessDenied(message="Sorry but you don't have rights on show list users",
                               response_status=status.HTTP_403_FORBIDDEN)
