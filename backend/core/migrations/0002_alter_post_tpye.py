# Generated by Django 4.1.5 on 2023-01-12 03:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='tpye',
            field=models.CharField(choices=[('W', 'work'), ('P', 'post')], default='P', max_length=1),
        ),
    ]
