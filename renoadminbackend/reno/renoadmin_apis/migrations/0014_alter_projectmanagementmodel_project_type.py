# Generated by Django 3.2.16 on 2023-04-22 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('renoadmin_apis', '0013_auto_20230422_1923'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projectmanagementmodel',
            name='project_type',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
