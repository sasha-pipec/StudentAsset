from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from service_objects.services import ServiceOutcome

from api.services.user.mute_toggle import UserMuteToggleService
from api.services.user.show import UserShowService
from api.serializers.user.show import UserShowSerializer


class UserLoginView(APIView):
    authentication_classes = []

    def get(self, request, *args, **kwargs):
        outcome = ServiceOutcome(UserShowService, {**request.data | request.query_params.dict()})
        return Response(UserShowSerializer(outcome.result).data, status=status.HTTP_200_OK)


class UserMuteView(APIView):
    def patch(self, request, *args, **kwargs):
        outcome = ServiceOutcome(UserMuteToggleService, kwargs | {'user': request.user})
        return Response(UserShowSerializer(outcome.result).data, status=status.HTTP_200_OK)
