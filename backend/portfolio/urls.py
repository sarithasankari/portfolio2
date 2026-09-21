from django.urls import path
from . import views

urlpatterns = [
    path('profile/', views.ProfileView.as_view(), name='profile'),
    path('skills/', views.SkillListView.as_view(), name='skills'),
    path('projects/', views.ProjectListView.as_view(), name='projects'),
    path('experience/', views.ExperienceListView.as_view(), name='experience'),
    path('education/', views.EducationListView.as_view(), name='education'),
    path('certifications/', views.CertificationListView.as_view(), name='certifications'),
    path('social-links/', views.SocialLinkListView.as_view(), name='social_links'),
    path('contact/', views.ContactCreateView.as_view(), name='contact'),
    path('resume/download/', views.download_resume, name='download_resume'),
]
