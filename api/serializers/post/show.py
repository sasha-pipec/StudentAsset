from rest_framework import serializers

from api.serializers.user.show import UserShowSerializer
from models_app.models import Post


class PostShowSerializer(serializers.ModelSerializer):
    user = UserShowSerializer(read_only=True)
    total_likes = serializers.IntegerField()

    class Meta:
        model = Post
        fields = ("title", "description", "image", "date", "created_at", "updated_at", "user", "total_likes", )
