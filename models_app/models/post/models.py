# -*- coding: utf8 -*-
from django.db import models


class Post(models.Model):
    """Model Post"""

    title = models.CharField(max_length=255, verbose_name='Заголовок')
    description = models.TextField(blank=True, verbose_name='Описание')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')
    user = models.ForeignKey(to='User', on_delete=models.CASCADE, related_name='users', verbose_name='Пользователь')

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'posts'
        app_label = "models_app"
        verbose_name = 'Post'
        verbose_name_plural = 'Posts'
