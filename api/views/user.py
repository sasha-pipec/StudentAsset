from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from service_objects.services import ServiceOutcome

from api.services.user.auth import UserAuthService
from api.services.user.list import UserListService
from api.services.user.mute_toggle import UserMuteToggleService
from api.services.user.login import UserLoginService
from api.serializers.user.show import UserShowSerializer
from api.services.user.show import UserShowService


class UserLoginView(APIView):
    authentication_classes = []

    def get(self, request, *args, **kwargs):
        outcome = ServiceOutcome(UserLoginService, {**request.data | request.query_params.dict()})
        return Response(UserShowSerializer(outcome.result).data, status=status.HTTP_200_OK)


class UserMuteView(APIView):
    def patch(self, request, *args, **kwargs):
        outcome = ServiceOutcome(UserMuteToggleService, kwargs | {'user': request.user})
        return Response(UserShowSerializer(outcome.result).data, status=status.HTTP_200_OK)


class UserListView(APIView):
    def get(self, request, *args, **kwargs):
        outcome = ServiceOutcome(UserListService, {'user': request.user})
        return Response(UserShowSerializer(outcome.result, many=True).data, status=status.HTTP_200_OK)


class UserShowView(APIView):
    def get(self, request, *args, **kwargs):
        outcome = ServiceOutcome(UserShowService, kwargs | {'user': request.user})
        return Response(UserShowSerializer(outcome.result).data, status=status.HTTP_200_OK)


class UserAuthView(APIView):
    def get(self, request, *args, **kwargs):
        outcome = ServiceOutcome(UserAuthService, request.query_params.dict())
        return Response(UserShowSerializer(outcome.result).data, status=status.HTTP_200_OK)
