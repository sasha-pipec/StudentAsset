# -*- coding: utf8 -*-
from django.db import models


class Comment(models.Model):
    """The class stores post comments"""

    post_comment = 'post'
    comment = 'comment'
    TYPE = [
        (post_comment, 'Комментарий'),
        (comment, 'Ответ'),
    ]

    text = models.CharField(max_length=255, verbose_name='Комментарий')
    is_question = models.CharField(max_length=20, choices=TYPE, default=post_comment, verbose_name='Комментарий или ответ')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')
    answer = models.ForeignKey(to='Comment', on_delete=models.CASCADE, verbose_name='Ответ', null=True, blank=True,
                               related_name='answers')
    post = models.ForeignKey(to='Post', on_delete=models.CASCADE, verbose_name='Пост', related_name='comments')
    user = models.ForeignKey(to='User', on_delete=models.CASCADE, verbose_name='Пользователь', related_name='comments_user')

    class Meta:
        db_table = 'comments'
        app_label = "models_app"
        verbose_name = 'Comment'
        verbose_name_plural = 'Comments'

    def __str__(self):
        return self.text
