from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import Bsd1ViewSet,Bsd2ViewSet,Bsd2ViewSet,Bsd2ViewSet,Bsd2ViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('bsd1', Bsd1ViewSet )
router.register('bsd2', Bsd2ViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
