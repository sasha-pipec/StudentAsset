from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from service_objects.services import ServiceOutcome
from api.services.user.show import UserShowService
from api.serializers.user.show import UserShowSerializer


class UserGetView(APIView):
    authentication_classes = []

    def get(self, request):
        outcome = ServiceOutcome(UserShowService, {**request.data | request.query_params.dict()})
        return Response(UserShowSerializer(outcome.result).data, status=status.HTTP_200_OK)
