# Generated by Django 3.1.1 on 2020-10-25 09:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('grades', '0003_grade_instructors'),
    ]

    operations = [
        migrations.AlterField(
            model_name='grade',
            name='instructors',
            field=models.TextField(),
        ),
    ]
