from drf_yasg.utils import swagger_auto_schema
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from service_objects.services import ServiceOutcome

from api.docs.event import EVENT_VOTE_VIEW
from api.docs.event import EVENT_LIST_VIEW
from api.docs.event import EVENT_CREATE_VIEW
from api.docs.event import EVENT_APPROVE_VIEW
from api.docs.event import EVENT_CANCEL_VIEW
from api.serializers.event.list import EventListSerializer
from api.serializers.vote.show import VoteShowSerializers
from api.services.event.create import EventCreateServices
from api.services.event.approve import EventApproveServices
from api.services.event.delete import EventDeleteServices
from api.services.event.list import EventListServices
from api.services.vote.create import EventVoteServices


class EventVoteView(APIView):

    @swagger_auto_schema(**EVENT_VOTE_VIEW)
    def post(self, request, *args, **kwargs):
        outcome = ServiceOutcome(EventVoteServices, kwargs | {"user": request.user} | request.POST.dict())
        return Response(VoteShowSerializers(outcome.result).data, status=status.HTTP_200_OK)


class EventCreateListView(APIView):

    @swagger_auto_schema(**EVENT_LIST_VIEW)
    def get(self, request, *args, **kwargs):
        outcome = ServiceOutcome(EventListServices, request.query_params.dict())
        return Response(
            {
                "Event": EventListSerializer(outcome.result.get('object_list'), many=True).data,
                'page_data': outcome.result.get('page_range'),
                'page_info': outcome.result.get('page_info'),
            },
            status=status.HTTP_200_OK
        )

    @swagger_auto_schema(**EVENT_CREATE_VIEW)
    def post(self, request, *args, **kwargs):
        outcome = ServiceOutcome(EventCreateServices, request.POST.dict() | {"user": request.user}, request.FILES)
        return Response(
            {
                "Event": EventListSerializer(outcome.result).data,
            },
            status=status.HTTP_200_OK
        )


class EventApproveView(APIView):

    @swagger_auto_schema(**EVENT_APPROVE_VIEW)
    def patch(self, request, *args, **kwargs):
        outcome = ServiceOutcome(EventApproveServices, kwargs | {"user": request.user})
        return Response({"INFO": outcome.result}, status=status.HTTP_200_OK)


class EventDeleteView(APIView):

    @swagger_auto_schema(**EVENT_CANCEL_VIEW)
    def delete(self, request, *args, **kwargs):
        outcome = ServiceOutcome(EventDeleteServices, kwargs | {"user": request.user})
        return Response({"INFO": outcome.result}, status=status.HTTP_200_OK)
