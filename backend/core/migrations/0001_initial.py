# Generated by Django 4.1.5 on 2023-01-12 03:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tpye', models.CharField(choices=[('W', 'work'), ('P', 'post')], default='P', max_length=2)),
                ('title', models.CharField(max_length=127)),
                ('reading_time', models.IntegerField(default=5)),
                ('content', models.JSONField()),
            ],
        ),
    ]
