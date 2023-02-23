from rest_framework.serializers import ModelSerializer
from models_app.models import Thread


class ThreadCreateSerializers(ModelSerializer):
    class Meta:
        model = Thread
        fields = "__all__"
