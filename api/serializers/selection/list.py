from rest_framework import serializers

from models_app.models import Selection
from models_app.models import Vote


class SelectionListSerializer(serializers.ModelSerializer):
    total_votes = serializers.SerializerMethodField()

    class Meta:
        model = Selection
        fields = (
            "id",
            "title",
            "total_votes",
        )

    def get_total_votes(self, obj):
        return Vote.objects.filter(selection=obj).count()
