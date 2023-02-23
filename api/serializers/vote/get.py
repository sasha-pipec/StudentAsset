from rest_framework.serializers import ModelSerializer

from api.serializers.selection.list import SelectionListSerializer
from api.serializers.user.get import UserGetSerializer
from models_app.models import Vote


class VoteGetSerializers(ModelSerializer):
    user = UserGetSerializer(read_only=True)
    selection = SelectionListSerializer(read_only=True)

    class Meta:
        model = Vote
        fields = "__all__"
