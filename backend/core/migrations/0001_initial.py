# Generated by Django 4.2 on 2023-04-19 18:42

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=100, null=True)),
                ('apellido', models.CharField(max_length=100, null=True)),
                ('fecha_nacimiento', models.DateField(null=True)),
                ('direccion', models.CharField(max_length=500, null=True)),
                ('email', models.EmailField(max_length=80, unique=True)),
                ('password', models.CharField(max_length=500)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Habitacion',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('disponible', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='Administrador',
            fields=[
                ('id_user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='admin', serialize=False, to=settings.AUTH_USER_MODEL)),
                ('salario', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Recepcionista',
            fields=[
                ('id_user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='recep', serialize=False, to=settings.AUTH_USER_MODEL)),
                ('salario', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('id_user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='client', serialize=False, to=settings.AUTH_USER_MODEL)),
                ('habitacion_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Habitacion_id_rep', to='core.habitacion')),
            ],
        ),
    ]
