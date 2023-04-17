from rest_framework import serializers

from api.serializers.user.show import UserShowSerializer
from models_app.models import Event


class EventListSerializer(serializers.ModelSerializer):
    user = UserShowSerializer(read_only=True)
    vote = serializers.SerializerMethodField()

    class Meta:
        model = Event
        fields = (
            "title",
            "description",
            "date",
            "image",
            "created_at",
            "updated_at",
            "status",
            "user",
            "vote",
        )

    def get_vote(self, obj):
        return obj.events.all()[0].choice if obj.events.all() else None
