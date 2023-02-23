from rest_framework import serializers

from models_app.models import Selection


class SelectionListSerializer(serializers.ModelSerializer):
    total_votes = serializers.IntegerField()

    class Meta:
        model = Selection
        fields = (
            "id",
            "title",
            "total_votes",
        )
