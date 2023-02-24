from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from service_objects.services import ServiceOutcome

from api.serializers.post.show import PostShowSerializer
from api.services.post.change import PostChangeServices
from api.services.post.create import PostCreateServices
from api.services.post.delete import PostDeleteServices
from api.services.post.list import PostListServices
from api.services.post.show import PostShowServices


class PostCreateListView(APIView):
    def get(self, request, *args, **kwargs):
        outcome = ServiceOutcome(PostListServices, request.query_params.dict())
        return Response(
            {
                "posts": PostShowSerializer(outcome.result.get('object_list'), many=True).data,
                'page_data': outcome.result.get('page_range'),
                'page_info': outcome.result.get('page_info'),
            },
            status=status.HTTP_200_OK
        )

    def post(self, request, *args, **kwargs):
        outcome = ServiceOutcome(PostCreateServices, request.POST.dict() | {"user": request.user}, request.FILES)
        return Response(
            {
                "post": PostShowSerializer(outcome.result).data
            },
            status=status.HTTP_200_OK
        )


class PostShowChangeDeleteView(APIView):

    def get(self, request, *args, **kwargs):
        outcome = ServiceOutcome(
            PostShowServices,
            kwargs,
        )
        return Response(
            {
                "post": PostShowSerializer(outcome.result).data
            },
            status=status.HTTP_200_OK
        )

    def patch(self, request, *args, **kwargs):
        outcome = ServiceOutcome(
            PostChangeServices,
            request.POST.dict() | kwargs | {"user": request.user},
            request.FILES
        )
        return Response(
            {
                "post": PostShowSerializer(outcome.result).data
            },
            status=status.HTTP_200_OK
        )

    def delete(self, request, *args, **kwargs):
        ServiceOutcome(
            PostDeleteServices,
            kwargs | {"user": request.user},
        )
        return Response(
            {
                "post": True
            },
            status=status.HTTP_200_OK
        )
