# Generated by Django 4.0.10 on 2023-05-25 09:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('renoadmin_apis', '0031_remove_config_setting_email_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='config_setting',
            name='username',
            field=models.CharField(default='', max_length=100, unique=True),
            preserve_default=False,
        ),
    ]
