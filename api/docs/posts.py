# from drf_yasg import openapi
# from rest_framework import status
#
# POSTS_SHOW_VIEW = {
#     'manual_parameters': [
#         openapi.Parameter('id', openapi.IN_PATH,
#                           description="ID поста",
#                           type=openapi.TYPE_NUMBER,
#                           required=True),
#     ],
#     'responses': {
#         status.HTTP_200_OK: 'Successes',
#         status.HTTP_404_NOT_FOUND: 'Post with current id not found',
#     },
# }
#
# POSTS_LIST_VIEW = {
#     'manual_parameters': [
#         openapi.Parameter('page', openapi.IN_QUERY,
#                           description="Вы можете указать номер страницы значения, взятые с первой страницы, будут возвращены по умолчанию",
#                           type=openapi.TYPE_NUMBER,
#                           required=False),
#         openapi.Parameter('per_page', openapi.IN_QUERY,
#                           description="Вы можете выбрать количество фотографий на странице",
#                           type=openapi.TYPE_NUMBER,
#                           required=False),
#         openapi.Parameter('filter_date', openapi.IN_QUERY,
#                           description="Фильтрация постов по дате",
#                           type=openapi.TYPE_STRING),
#     ],
#     'responses': {
#         status.HTTP_200_OK: 'Successes',
#         status.HTTP_404_NOT_FOUND: 'Posts with current params not found',
#     },
# }
# POSTS_CHANGE_VIEW = {
#     'manual_parameters': [
#         openapi.Parameter('slug', openapi.IN_QUERY,
#                           description="The slug of photo",
#                           type=openapi.TYPE_STRING,
#                           ),
#         openapi.Parameter('photo', openapi.IN_QUERY,
#                           description="The new photo of post",
#                           type=openapi.TYPE_FILE),
#         openapi.Parameter('name', openapi.IN_QUERY,
#                           description="The new name of post",
#                           type=openapi.TYPE_STRING),
#         openapi.Parameter('content', openapi.IN_QUERY,
#                           description="The new content of post",
#                           type=openapi.TYPE_STRING),
#     ],
#     'responses': {
#         status.HTTP_204_NO_CONTENT: 'Successes',
#         status.HTTP_404_NOT_FOUND: 'Incorrect value of slug',
#         status.HTTP_401_UNAUTHORIZED: 'Incorrect value of Api_token',
#     },
#     'operation_description': 'You need to authorization' \
#                              'If you want change your post, send one of all not required parameters'
# }
#
# # POSTS_CHANGE_VIEW = {
# #     'manual_parameters': [
# #         openapi.Parameter('id', openapi.IN_FORM,
# #                           description="ID поста",
# #                           type=openapi.TYPE_NUMBER,),
# #         openapi.Parameter('title', openapi.IN_FORM,
# #                           description="Новое название поста",
# #                           type=openapi.TYPE_STRING,),
# #         openapi.Parameter('description', openapi.IN_FORM,
# #                           description="Новое описание поста",
# #                           type=openapi.TYPE_STRING,),
# #         openapi.Parameter('image', openapi.IN_FORM,
# #                           description="Новое фото поста",
# #                           type=openapi.TYPE_FILE,),
# #     ],
# #     'responses': {
# #         status.HTTP_200_OK: 'Successes',
# #         status.HTTP_404_NOT_FOUND: 'Posts with current params not found',
# #     },
# # }
