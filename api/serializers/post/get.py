from rest_framework import serializers

from api.serializers.user.get import UserGetSerializer
from models_app.models import Post


class PostGetSerializer(serializers.ModelSerializer):
    user = UserGetSerializer(read_only=True)

    class Meta:
        model = Post
        fields = "__all__"
