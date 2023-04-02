from rest_framework import serializers
from models_app.models.user.models import User


class UserShowSerializer(serializers.ModelSerializer):
    role = serializers.SerializerMethodField()

    def get_role(self, instance):
        return instance.get_role_display()

    class Meta:
        model = User
        fields = (
            "id",
            "API_Key",
            "username",
            "first_name",
            "last_name",
            "group",
            "role",
            "is_muted",
        )
