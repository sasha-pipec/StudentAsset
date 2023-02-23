from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from service_objects.services import ServiceOutcome

from api.serializers.event.list import EventListSerializer
from api.serializers.selection.list import SelectionListSerializer
from api.serializers.vote.get import VoteGetSerializers
from api.services.event.create import EventCreateServices
from api.services.event.vote import EventVoteServices


class EventVoteView(APIView):

    def post(self, request, *args, **kwargs):
        outcome = ServiceOutcome(EventVoteServices, kwargs | {"user": request.user})
        return Response(VoteGetSerializers(outcome.result).data, status=status.HTTP_200_OK)


class EventCreateView(CreateAPIView):

    def post(self, request, *args, **kwargs):
        outcome = ServiceOutcome(EventCreateServices, request.POST.dict() | {"user": request.user})
        return Response(
            {
                "Event": EventListSerializer(outcome.result["event"]).data,
                "Selections": SelectionListSerializer(outcome.result["selections"], many=True).data,
            },
            status=status.HTTP_200_OK
        )
