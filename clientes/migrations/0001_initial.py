# Generated by Django 5.0.6 on 2024-06-28 04:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('rut_cli', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('nom_cli', models.CharField(max_length=20)),
                ('appa_cli', models.CharField(max_length=20)),
                ('apma_cli', models.CharField(max_length=20)),
            ],
        ),
    ]