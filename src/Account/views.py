from django.shortcuts import render, redirect, reverse
from django.contrib import messages
from validate_email import validate_email
from .models import Profile
from .forms import LoginForm, SignUpForm, ProfileForm
from django.core.mail import EmailMessage
from django.conf import settings
import threading
from .decorators import auth_user_should_not_access
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str, force_text, DjangoUnicodeDecodeError
from .utils import generate_token

# Create your views here.
class EmailThread(threading.Thread):

    def __init__(self, email):
        self.email = email
        threading.Thread.__init__(self)

    def run(self):
        self.email.send()

def send_activation_email(user, request):
    current_site = get_current_site(request)
    email_subject = 'Activate your account'
    email_body = render_to_string('authentication/activate.html', {
        'user': user,
        'domain': current_site,
        'uid': urlsafe_base64_encode(force_bytes(user.pk)),
        'token': generate_token.make_token(user)
    })

    email = EmailMessage(subject=email_subject, body=email_body,
                         from_email=settings.EMAIL_FROM_USER,
                         to=[user.email]
                         )

    if not settings.TESTING:
        EmailThread(email).start()

def Login(requests):
    return render(requests, 'Login.html')

@auth_user_should_not_access
def Register(requests):
    form = SignUpForm()
    if requests.method == "POST":
        context = {'has_error': False, 'data': requests.POST}
        first_name = requests.POST.get('first_name')
        last_name = requests.POST.get('last_name')
        email = requests.POST.get('email')
        username = requests.POST.get('username')
        password1 = requests.POST.get('password1')
        password2 = requests.POST.get('password2')

        if len(password1) < 6:
            messages.add_message(requests, messages.ERROR,'Password should be at least 6 characters')
            context['has_error'] = True

        if password1 != password2:
            messages.add_message(requests, messages.ERROR,'Password mismatch')
            context['has_error'] = True

        if not validate_email(email):
            messages.add_message(requests, messages.ERROR,'Enter a valid email address')
            context['has_error'] = True

        if not username:
            messages.add_message(requests, messages.ERROR,'Username is required')
            context['has_error'] = True

        if Profile.objects.filter(username=username).exists():
            messages.add_message(requests, messages.ERROR,'Username is taken, choose another one')
            context['has_error'] = True

            return render(requests, 'Register.html', context, status=409)

        if Profile.objects.filter(email=email).exists():
            messages.add_message(requests, messages.ERROR,'Email is taken, choose another one')
            context['has_error'] = True

            return render(requests, 'Register.html', context, status=409)

        if context['has_error']:
            return render(requests, 'Register.html', context)

        user = Profile.objects.create_user(first_name=first_name, last_name=last_name, username=username, email=email, password1=password1)
        user.set_password(password1)
        user.save()

        if not context['has_error']:

            send_activation_email(user, requests)

            messages.add_message(requests, messages.SUCCESS,'We sent you an email to verify your account')
            return redirect('Login')

    return render(requests, 'Register.html', {'form':form})

def Logout(requests):
    
    Logout(requests)
    messages.add_message(requests, messages.SUCCESS,'Successfully logged out')

    return redirect(reverse('Login'))

def activate_user(request, uidb64, token):

    try:
        uid = force_text(urlsafe_base64_decode(uidb64))

        user = Profile.objects.get(pk=uid)

    except Exception as e:
        user = None

    if user and generate_token.check_token(user, token):
        user.is_email_verified = True
        user.save()

        messages.add_message(request, messages.SUCCESS,'Email verified, you can now login')
        return redirect(reverse('Login'))

    return render(request, 'Activation Failed.html', {"user": user})

def Dashboard(requests):
    return render(requests, 'Dashboard.html')