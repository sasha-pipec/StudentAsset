# -*- coding: utf8 -*-
from django.db import models


class Vote(models.Model):
    """Vote model"""

    user = models.ForeignKey('User', on_delete=models.CASCADE, verbose_name='Пользователь')
    selection = models.ForeignKey('Selection', on_delete=models.CASCADE, verbose_name='Выбор')

    def __str__(self):
        return self.user

    class Meta:
        db_table = 'votes'
        app_label = "models_app"
        unique_together = ("user", "selection")
        verbose_name = 'Vote'
        verbose_name_plural = 'Votes'
