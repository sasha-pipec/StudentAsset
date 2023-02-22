from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from service_objects.services import ServiceOutcome
from api.services.user.get import UserGetService
from api.serializers.user.get import UserGetSerializer


class UserGetView(APIView):

    def get(self, request):
        outcome = ServiceOutcome(UserGetService, {**request.data})
        return Response(UserGetSerializer(outcome.result).data, status=status.HTTP_200_OK)
