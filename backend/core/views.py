from django.shortcuts import render
from rest_framework import status
from rest_framework import generics
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken, AuthTokenSerializer
from rest_framework.response import Response
from core.serializers import UserSerializer, ClientSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view
from rest_framework.settings import api_settings
from rest_framework.decorators import permission_classes, authentication_classes
from django.template import loader
from .models import Administrador, User, Cliente

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
            },status=status.HTTP_302_FOUND)
        else:
            return Response({"error": True}, status=status.HTTP_400_BAD_REQUEST)

class CreateUserAdminView(generics.CreateAPIView):
    """Create user on the system"""
    permission_classes = [AllowAny]
    serializer_class = UserSerializer


#Se retorna la habitacion que esta vinculada al cliente
@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def get_info_client(request):
    user = Token.objects.get(key=request.auth.key).user
    user_client = Cliente.objects.get(id_user=user.id)
    serializer = ClientSerializer(user_client, many=False, context={'request': request})
    return Response({"Info_user": serializer.data} , status=status.HTTP_200_OK)

@api_view(['POST'])
@authentication_classes([])
@permission_classes([])
def get_token(request):
    user = User.objects.get(id=request.data['id_user'])
    token = Token.objects.get(user=user)
    return Response({"email": user.email, "token": token.key})