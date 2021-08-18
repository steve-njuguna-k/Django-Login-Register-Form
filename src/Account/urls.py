from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('',views.Login, name = 'Login'),
    path('Register',views.Register, name = 'Register'),
    path('Logout',views.Logout, name = 'Logout'),
    #path('activateuser/<uidb64>/<token>',views.ActivateUser, name = 'ActivateUser'),
    
    path('resetpassword/',auth_views.PasswordResetView.as_view(template_name='ResetPassword.html'), name = 'reset_password'),
    path('resetpassword/sent/',auth_views.PasswordResetDoneView.as_view(template_name='ResetPasswordSent.html'), name = 'password_reset_done'),
    path('resetpassword/<uidb64>/<token>/',auth_views.PasswordResetConfirmView.as_view(template_name='ResetPasswordConfirm.html'), name = 'password_reset_confirm'),
    path('resetpassword/success/',auth_views.PasswordResetCompleteView.as_view(template_name='ResetPasswordSuccess.html'), name = 'password_reset_complete'),

    path('User/Dashboard',views.Dashboard, name = 'Dashboard'),
]