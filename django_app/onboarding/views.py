from django.views.generic import TemplateView


class IndexView(TemplateView):
    template_name = "onboarding/index.html"


class SignupView(TemplateView):
    template_name = "onboarding/signup.html"


class RecruiterView(TemplateView):
    template_name = "onboarding/recruiter.html"


class LoginView(TemplateView):
    template_name = "onboarding/login.html"


class CompanyOnboardingView(TemplateView):
    template_name = "onboarding/company_onboarding.html"


class CompanyProfileView(TemplateView):
    template_name = "onboarding/company_profile.html"


class CompanyHiringView(TemplateView):
    template_name = "onboarding/company_hiring.html"


class CompanyJobPrefsView(TemplateView):
    template_name = "onboarding/company_jobprefs.html"


class CompanyConnectView(TemplateView):
    template_name = "onboarding/company_connect.html"


class CreatorOnboardingView(TemplateView):
    template_name = "onboarding/creator_onboarding.html"


class CreatorProfileView(TemplateView):
    template_name = "onboarding/creator_profile.html"


class CreatorConnectView(TemplateView):
    template_name = "onboarding/creator_connect.html"


class CreatorVerifyView(TemplateView):
    template_name = "onboarding/creator_verify.html"


class CreatorRewardsView(TemplateView):
    template_name = "onboarding/creator_rewards.html"
