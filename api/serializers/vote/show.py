from rest_framework.serializers import ModelSerializer

from api.serializers.selection.list import SelectionListSerializer
from api.serializers.user.show import UserShowSerializer
from models_app.models import Vote


class VoteShowSerializers(ModelSerializer):
    user = UserShowSerializer(read_only=True)
    selection = SelectionListSerializer(read_only=True)

    class Meta:
        model = Vote
        fields = "__all__"
