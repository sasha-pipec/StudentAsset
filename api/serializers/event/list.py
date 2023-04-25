from rest_framework import serializers

from api.serializers.user.show import UserShowSerializer
from models_app.models import Event


class EventListSerializer(serializers.ModelSerializer):
    user = UserShowSerializer(read_only=True)

    class Meta:
        model = Event
        fields = (
            "id",
            "title",
            "description",
            "date",
            "image",
            "created_at",
            "updated_at",
            "status",
            "user",
        )
