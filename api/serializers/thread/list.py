from rest_framework.serializers import ModelSerializer
from models_app.models import Thread


class ThreadSerializers(ModelSerializer):
    class Meta:
        model = Thread
        fields = (
            "id",
            "title",
            "description",
            "created_at",
            "updated_at",
            "status",
            "pinned",
            "user"
        )
