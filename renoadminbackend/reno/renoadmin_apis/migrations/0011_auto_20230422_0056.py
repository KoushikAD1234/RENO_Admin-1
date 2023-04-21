# Generated by Django 3.2.16 on 2023-04-21 19:26

from django.db import migrations, models
import renoadmin_apis.models


class Migration(migrations.Migration):

    dependencies = [
        ('renoadmin_apis', '0010_alter_projectmanagementmodel_review'),
    ]

    operations = [
        migrations.AddField(
            model_name='userdetails',
            name='about',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='userdetails',
            name='name',
            field=models.CharField(blank=True, default='', max_length=100),
        ),
        migrations.AddField(
            model_name='userdetails',
            name='status',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='cmsmodel',
            name='media',
            field=models.ImageField(blank=True, upload_to='my_pic2/pics'),
        ),
        migrations.AlterField(
            model_name='userdetails',
            name='pic',
            field=models.ImageField(blank=True, upload_to=renoadmin_apis.models.Userdetails.nameFile),
        ),
    ]
