from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from service_objects.services import ServiceOutcome

from api.serializers.event.list import EventListSerializer
from api.serializers.selection.list import SelectionListSerializer
from api.serializers.vote.show import UserShowSerializer
from api.services.event.create import EventCreateServices
from api.services.event.approve import EventApproveServices
from api.services.event.cancel import EventCancelServices
from api.services.event.list import EventListServices
from api.services.vote.create import EventVoteServices


class EventVoteView(APIView):

    def post(self, request, *args, **kwargs):
        outcome = ServiceOutcome(EventVoteServices, kwargs | {"user": request.user})
        return Response(UserShowSerializer(outcome.result).data, status=status.HTTP_200_OK)


class EventCreateListView(APIView):

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

    def post(self, request, *args, **kwargs):
        outcome = ServiceOutcome(EventCreateServices, request.POST.dict() | {"user": request.user})
        return Response(
            {
                "Event": EventListSerializer(outcome.result["event"]).data,
                "Selections": SelectionListSerializer(outcome.result["selections"], many=True).data,
            },
            status=status.HTTP_200_OK
        )


class EventApproveView(APIView):

    def patch(self, request, *args, **kwargs):
        outcome = ServiceOutcome(EventApproveServices, kwargs | {"user": request.user})
        return Response({"INFO": outcome.result}, status=status.HTTP_200_OK)


class EventCancelView(APIView):

    def delete(self, request, *args, **kwargs):
        outcome = ServiceOutcome(EventCancelServices, kwargs | {"user": request.user})
        return Response({"INFO": outcome.result}, status=status.HTTP_200_OK)
