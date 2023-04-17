# -*- coding: utf8 -*-
from django.db import models


class Vote(models.Model):
    """Vote model"""

    LIKE = 'like'
    DISLIKE = 'dislike'

    STATUS_CHOICES = (
        (LIKE, 'Лайк'),
        (DISLIKE, 'Дизлайк'),
    )

    user = models.ForeignKey('User', on_delete=models.CASCADE, verbose_name='Пользователь')
    choice = models.CharField(max_length=10, choices=STATUS_CHOICES, verbose_name='Голос')
    event = models.ForeignKey('Event', on_delete=models.CASCADE, verbose_name='Событие', related_name="events")

    def __str__(self):
        return f'{self.user.username} - {self.choice}'

    class Meta:
        db_table = 'votes'
        app_label = "models_app"
        unique_together = ("user", "choice")
        verbose_name = 'Vote'
        verbose_name_plural = 'Votes'
