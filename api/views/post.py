from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from service_objects.services import ServiceOutcome

from api.serializers.post.get import PostGetSerializer
from api.services.post.create import PostCreateServices


class PostCreateListView(APIView):
    def post(self, request, *args, **kwargs):
        outcome = ServiceOutcome(PostCreateServices, request.POST.dict() | {"user": request.user}, request.FILES)
        return Response(
            {
                "posts": PostGetSerializer(outcome.result).data
            },
            status=status.HTTP_200_OK
        )
