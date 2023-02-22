# -*- coding: utf8 -*-
from django.db import models


class Like(models.Model):
    """Class with like post"""

    post = models.ForeignKey(to='Post', on_delete=models.CASCADE, related_name='voting_posts', verbose_name='Пост')
    user = models.ForeignKey(to='User', on_delete=models.CASCADE, related_name='voting_users', verbose_name='Пользователь')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')

    def __str__(self):
        return f'Post:{self.post}, User:{self.user}'

    class Meta:
        db_table = 'likes'
        app_label = "models_app"
        verbose_name = 'Like'
        verbose_name_plural = 'Likes'
        unique_together = ('post', 'user')
