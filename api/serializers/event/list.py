from rest_framework import serializers

from models_app.models import Event


class EventListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = "__all__"
