from django.db import models


# post type enumeration
POST = 'P'
WORK = 'W'

POST_TYPE = [
    (WORK, 'work'),
    (POST, 'post')
]

class Post(models.Model):
    type = models.CharField(
        max_length=1,
        choices=POST_TYPE,
        default=POST,
    )
    title = models.CharField(max_length=127, unique=True)
    reading_time = models.IntegerField(default=5)
    content = models.JSONField()


class Contact(models.Model):
    name = models.CharField(
        max_length=127,
        null=False
    )
    email = models.CharField(
        max_length=255,
        null=False
    )
    content = models.CharField(
        max_length=2047,
        null=False
    )