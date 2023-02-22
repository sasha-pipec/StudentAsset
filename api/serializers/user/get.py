from rest_framework.serializers import ModelSerializer
from models_app.models.user.models import User


class UserGetSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
