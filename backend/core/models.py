from django.db import models


class Post(models.Model):
    postId = models.AutoField(primary_key=True)
    title = models.CharField(max_length=127)
    reading_time = models.IntegerField(default=5)
    content = models.JSONField()