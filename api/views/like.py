from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from service_objects.services import ServiceOutcome

from api.serializers.like.show import LikeShowSerializer
from api.services.like.create import LikeCreateServices


class LikeCreateDeleteView(APIView):

    def post(self, request, *args, **kwargs):
        outcome = ServiceOutcome(LikeCreateServices, kwargs | {"user": request.user})
        return Response(LikeShowSerializer(outcome.result).data, status=status.HTTP_200_OK)

    def delete(self, request, *args, **kwargs):
        return Response({})