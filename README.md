# Django Login & Sign Up Form
This is a Django Login & Sign Up Form With Email Verification & Password Reset Functionality

![](https://github.com/steve-njuguna-k/Django-Login-Register-Form/blob/master/src/static/img/Screenshot-1.PNG)

# Some Unique Features

- You Can Recieve An Email Address To Reset Your Password

![](https://github.com/steve-njuguna-k/Django-Login-Register-Form/blob/master/src/static/img/Screenshot-6.PNG)

- You Can Recieve An Email Address To Activate Your Account

![](https://github.com/steve-njuguna-k/Django-Login-Register-Form/blob/master/src/static/img/Screenshot-7.PNG)


# Project Setup Instructions
1) Git clone the repository 
```
https://github.com/steve-njuguna-k/Django-Login-Register-Form.git
```

2. Go To Project Directory
```
cd Django-Login-Register-Form
```
3. Create Virtual Environment
```
virtualenv env
```
4. Active Virtual Environment
```
env\scripts\activate
```
5. Install Requirements File
```
pip install -r requirements.txt
```
6. Make Migrations
```
py manage.py makemigrations
```
7. Migrate Database
```
py manage.py migrate
```
8. Create Super User
```
py manage.py createsuperuser
```
9. Run Project
```
py manage.py runserver
```

Under settings.py, make changes to the Email Setup
```
#Email Setup
EMAIL_FROM_USER = 'Your Email Address'
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'Your Email Addres'
EMAIL_HOST_PASSWORD = 'Your Email Password'
```

© 2021 Steve Njuguna

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
