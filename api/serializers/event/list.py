from django.db.models import Count
from rest_framework import serializers

from api.serializers.selection.list import SelectionListSerializer
from api.serializers.user.get import UserGetSerializer
from models_app.models import Event
from models_app.models import Selection


class EventListSerializer(serializers.ModelSerializer):
    user = UserGetSerializer(read_only=True)
    selection = serializers.SerializerMethodField()

    class Meta:
        model = Event
        fields = "__all__"

    def get_selection(self, obj):
        return SelectionListSerializer(
            Selection.objects.filter(event=obj).annotate(total_votes=Count("votes")),
            many=True
        ).data
