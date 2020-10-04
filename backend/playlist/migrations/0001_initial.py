# Generated by Django 3.1.1 on 2020-10-04 11:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('catalog', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Playlist',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(default='custom', max_length=255)),
                ('name', models.CharField(max_length=255)),
                ('semester', models.CharField(default='fall', max_length=50)),
                ('year', models.CharField(default='2020', max_length=4)),
                ('courses', models.ManyToManyField(to='catalog.Course')),
            ],
            options={
                'db_table': 'catalog_playlist',
            },
        ),
    ]
