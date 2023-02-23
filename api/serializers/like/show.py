from rest_framework.serializers import ModelSerializer

from api.serializers.post.show import PostShowSerializer
from api.serializers.user.show import UserShowSerializer
from models_app.models import Like


class LikeShowSerializer(ModelSerializer):
    post = PostShowSerializer(read_only=True)
    user = UserShowSerializer(read_only=True)

    class Meta:
        model = Like
        fields = (
            "id",
            "created_at",
            "updated_at",
            "post",
            "user",
        )
