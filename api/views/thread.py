from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from service_objects.services import ServiceOutcome
from api.services.thread.create import ThreadCreateService
from api.services.thread.show import ThreadShowService
from api.serializers.thread.create import ThreadCreateSerializers


class ThreadCreateView(APIView):

    def post(self, request):
        outcome = ServiceOutcome(ThreadCreateService, {**request.data | request.POST.dict() | {'user': request.user}})
        return Response(ThreadCreateSerializers(outcome.result).data, status=status.HTTP_200_OK)


class ThreadRetrieveUpdateDestroyView(APIView):

    def get(self, request, *args, **kwargs):
        outcome = ServiceOutcome(ThreadShowService, kwargs | {'user': request.user})
        return Response(ThreadCreateSerializers(outcome.result).data, status=status.HTTP_200_OK)
