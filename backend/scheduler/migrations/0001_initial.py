# Generated by Django 3.1.1 on 2021-03-01 21:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('catalog', '0006_section_associated_sections'),
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Schedule',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32)),
                ('year', models.CharField(max_length=4)),
                ('semester', models.CharField(max_length=20)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('date_modified', models.DateTimeField(auto_now=True)),
                ('total_units', models.PositiveSmallIntegerField(default=0)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='schedules', to='user.berkeleytimeuser')),
            ],
        ),
        migrations.CreateModel(
            name='TimeBlock',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32)),
                ('start_time', models.TimeField()),
                ('end_time', models.TimeField()),
                ('days', models.CharField(max_length=7)),
                ('schedule', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='timeblocks', to='scheduler.schedule')),
            ],
        ),
        migrations.CreateModel(
            name='SectionSelection',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='scheduler_sections', to='catalog.course')),
                ('primary', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='scheduler_primary_sections', to='catalog.section')),
                ('schedule', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='selected_sections', to='scheduler.schedule')),
                ('secondary', models.ManyToManyField(related_name='scheduler_secondary_sections', to='catalog.Section')),
            ],
        ),
    ]
