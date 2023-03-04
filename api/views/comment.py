from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from service_objects.services import ServiceOutcome
from api.serializers.comment.create import CommentCreateSerializer
from api.serializers.comment.list import CommentListSerializer
from api.services.comment.create import CommentCreateService
from api.services.comment.list import CommentListService


class CommentCreateListView(APIView):

    def get(self, request, *args, **kwargs):
        outcome = ServiceOutcome(CommentListService, kwargs | request.query_params.dict() | {'user': request.user})
        return Response(
            {
                "comments": CommentListSerializer(outcome.result.get('object_list'), context={
                    'user': request.user,
                    'request': request
                }, many=True).data,
                'page_data': outcome.result.get('page_range'),
                'page_info': outcome.result.get('page_info'),
            },
            status=status.HTTP_200_OK
        )

    def post(self, request, *args, **kwargs):
        outcome = ServiceOutcome(CommentCreateService,
                                 kwargs | {**request.data | request.POST.dict() | {'user': request.user}})
        return Response(CommentCreateSerializer(outcome.result).data, status=status.HTTP_200_OK)
