from rest_framework import serializers

from api.serializers.selection.list import SelectionListSerializer
from api.serializers.user.show import UserShowSerializer
from models_app.models import Event
from models_app.models import Selection


class EventListSerializer(serializers.ModelSerializer):
    user = UserShowSerializer(read_only=True)
    selection = serializers.SerializerMethodField()

    class Meta:
        model = Event
        fields = "__all__"

    def get_selection(self, obj):
        return SelectionListSerializer(
            Selection.objects.filter(event=obj),
            many=True
        ).data
