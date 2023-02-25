from drf_yasg import openapi
from rest_framework import status

from api.docs.paginator import PAGINATOR_INFO
from api.docs.selection import SELECTION_ITEMS
from api.docs.user import USER_ITEM
from api.serializers.vote.show import VoteShowSerializers

EVENTS_ITEM = {
    "items": openapi.Schema(
        type=openapi.TYPE_OBJECT,
        properties=dict(
            id=openapi.Schema(
                type=openapi.TYPE_INTEGER, example=1
            ),
            user=USER_ITEM,
            selection=openapi.Schema(type=openapi.TYPE_ARRAY, **SELECTION_ITEMS),
            title=openapi.Schema(type=openapi.TYPE_STRING, example="string"),
            description=openapi.Schema(type=openapi.TYPE_STRING, example="string"),
            date=openapi.Schema(type=openapi.TYPE_STRING, example="2023-02-25T15:15:51.217827+03:00"),
            created_at=openapi.Schema(type=openapi.TYPE_STRING, example="2023-02-25T15:15:51.217827+03:00"),
            updated_at=openapi.Schema(type=openapi.TYPE_STRING, example="2023-02-25T15:15:51.217827+03:00"),
            status=openapi.Schema(type=openapi.TYPE_STRING, example="Approved"),
        ),
    ),
}

EVENT_VOTE_VIEW = {
    "operation_id": "Голосование за один из вариантов в событии",
    "operation_description": """
        Голосование за один из вариантов в событии
        Передайте id варианта выбора
    """,
    "responses": {
        status.HTTP_200_OK: VoteShowSerializers(many=True),
    },
}

EVENT_LIST_VIEW = {
    "operation_id": "Список событий",
    "operation_description": """
        Выводит список событий на определённой странице
        
        Можно передать следующие аргументы:
        order - сортировка (по умолчанию id)
        filter - фильтрация (по умолчанию нет)
        page - номер страницы (по умолчанию 1)
        per_page - сколько элементов на странице (по умолчанию 10)
    """,
    "responses": {
        status.HTTP_200_OK: openapi.Response(
            "Success",
            openapi.Schema(
                type=openapi.TYPE_OBJECT,
                properties=dict(
                    Event=openapi.Schema(
                        type=openapi.TYPE_ARRAY,
                        **EVENTS_ITEM,
                    ),
                    page_data=openapi.Schema(type=openapi.TYPE_STRING, example='"[\"1\"]"'),
                    page_info=PAGINATOR_INFO,
                ),
            ),
        )
    },
}

EVENT_CREATE_VIEW = {
    "operation_id": "Создание события",
    "operation_description": """
        Создаёт событие по следующим параметрам:
    
        title - тема события
        description - описание события
        selection_count - сколько вариантов выбора у события
        selection_[index]_title - вариант выбора (может быть несколько)
        
        index - номер выбора, начиная с 0 и до selection_count
    """,

    'request_body': openapi.Schema(
        type=openapi.TYPE_OBJECT,
        required=['title', 'description', 'selection_count', "selection_0_title", "selection_1_title"],
        properties={
            'title': openapi.Schema(type=openapi.TYPE_STRING, description='Тема события'),
            'description': openapi.Schema(type=openapi.TYPE_STRING, description='Описание события'),
            'selection_count': openapi.Schema(type=openapi.TYPE_INTEGER,
                                              description='Сколько вариантов выбора у события'),
            'selection_0_title': openapi.Schema(type=openapi.TYPE_STRING, description='Варинат выбора'),
        },
    ),

    "responses": {
        status.HTTP_200_OK: openapi.Response(
            "Success",
            openapi.Schema(
                type=openapi.TYPE_OBJECT,
                properties=dict(
                    Event=EVENTS_ITEM["items"],
                    Selections=openapi.Schema(type=openapi.TYPE_ARRAY, **SELECTION_ITEMS),
                ),
            ),
        )
    },
}

EVENT_APPROVE_VIEW = {
    "operation_id": "Одобрение события",
    "operation_description": """
        Одобряет событие
        
        В id передаётся идентификатор события
    """,
    "responses": {
        status.HTTP_200_OK: openapi.Response(
            "Success",
            openapi.Schema(
                type=openapi.TYPE_OBJECT,
                properties=dict(
                    INFO=openapi.Schema(type=openapi.TYPE_STRING,
                                        example='Status event with id 0 changed successfully'),
                ),
            ),
        )
    }
}

EVENT_CANCEL_VIEW = {
    "operation_id": "Отклонение или удаление события",
    "operation_description": """
        Отклоняет или удаляет событие

        В id передаётся идентификатор события
    """,
    "responses": {
        status.HTTP_200_OK: openapi.Response(
            "Success",
            openapi.Schema(
                type=openapi.TYPE_OBJECT,
                properties=dict(
                    INFO=openapi.Schema(type=openapi.TYPE_STRING,
                                        example='Event with id 0 was successfully rejected or deleted'),
                ),
            ),
        )
    }
}
