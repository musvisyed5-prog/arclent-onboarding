from django.urls import path

from . import views

app_name = "onboarding"

urlpatterns = [
    path("", views.IndexView.as_view(), name="index"),
    path("signup/", views.SignupView.as_view(), name="signup"),
    path("recruiter/", views.RecruiterView.as_view(), name="recruiter"),
    path("login/", views.LoginView.as_view(), name="login"),
    path("company/onboarding/", views.CompanyOnboardingView.as_view(), name="company_onboarding"),
    path("company/profile/", views.CompanyProfileView.as_view(), name="company_profile"),
    path("company/hiring/", views.CompanyHiringView.as_view(), name="company_hiring"),
    path("company/job-preferences/", views.CompanyJobPrefsView.as_view(), name="company_jobprefs"),
    path("company/connect/", views.CompanyConnectView.as_view(), name="company_connect"),
    path("creator/onboarding/", views.CreatorOnboardingView.as_view(), name="creator_onboarding"),
    path("creator/profile/", views.CreatorProfileView.as_view(), name="creator_profile"),
    path("creator/connect/", views.CreatorConnectView.as_view(), name="creator_connect"),
    path("creator/verify/", views.CreatorVerifyView.as_view(), name="creator_verify"),
    path("creator/rewards/", views.CreatorRewardsView.as_view(), name="creator_rewards"),
]
