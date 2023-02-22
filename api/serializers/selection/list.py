from rest_framework import serializers

from models_app.models import Selection


class SelectionListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Selection
        fields = "__all__"
