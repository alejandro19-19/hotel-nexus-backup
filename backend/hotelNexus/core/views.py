from django.shortcuts import render
from rest_framework import status
from rest_framework import generics
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken, AuthTokenSerializer
from rest_framework.response import Response
from core.serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view
from rest_framework.settings import api_settings
from rest_framework.decorators import permission_classes, authentication_classes
from django.template import loader
from .models import Administrador, User

# Create your views here.

class CreateTokenView(ObtainAuthToken):
    """Create auth token"""
    serializer_class = AuthTokenSerializer
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            data=request.data, context={'request': request})
        if serializer.is_valid():
            user = serializer.validated_data['user']
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                'error': False,
                'token': token.key,
                'email': user.email,
                'name': user.nombre,
            })
        else:
            return Response({"error": True}, status=status.HTTP_200_OK)
    #


class CreateUserAdminView(generics.CreateAPIView):
    """Create user on the system"""
    permission_classes = [
        AllowAny]  # el allowAny no es permanente debe cambiarse en un futuro
    serializer_class = UserSerializer
