from rest_framework import serializers

from api.serializers.user.show import UserShowSerializer
from models_app.models import Post


class PostShowSerializer(serializers.ModelSerializer):
    user = UserShowSerializer(read_only=True)

    class Meta:
        model = Post
        fields = "__all__"
