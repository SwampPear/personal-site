# Generated by Django 4.1.5 on 2023-01-06 14:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('postId', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=127)),
                ('reading_time', models.IntegerField(default=5)),
                ('content', models.JSONField()),
            ],
        ),
    ]