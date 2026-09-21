import os
from rest_framework import status, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.http import FileResponse, Http404
from django.conf import settings

from .models import (
    Profile,
    Project,
    Skill,
    Experience,
    Education,
    Certification,
    SocialLink,
    ContactMessage
)
from .serializers import (
    ProfileSerializer,
    ProjectSerializer,
    SkillSerializer,
    ExperienceSerializer,
    EducationSerializer,
    CertificationSerializer,
    SocialLinkSerializer,
    ContactMessageSerializer
)


class ProfileView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        profile = Profile.objects.first()
        if not profile:
            profile = Profile.objects.create(
                name="Saritha N",
                title="Python Full Stack Developer & Computer Science Undergraduate",
                tagline="Passionate about creating seamless user experiences and scalable server solutions.",
                bio="I build complete web applications from frontend to backend using Python, Django, and modern JavaScript frameworks. Passionate about creating seamless user experiences and scalable server solutions.",
                about_intro="A passionate Computer Science undergraduate with a strong foundation in web development and a drive to create innovative digital solutions. I specialize in building responsive, user-friendly websites using modern technologies.",
                availability_status="Available for opportunities",
                email="sarithasankari154@gmail.com",
                phone="+91 93613 48040",
                location="India",
                degree="B.Sc CS",
                university="Periyar University",
                projects_count="5+",
                certifications_count="9+",
                technologies_count="20+"
            )
        serializer = ProfileSerializer(profile, context={'request': request})
        return Response(serializer.data)


class ProjectListView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Project.objects.all().order_by('order', 'id')
    serializer_class = ProjectSerializer


class SkillListView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Skill.objects.all().order_by('order', 'id')
    serializer_class = SkillSerializer


class ExperienceListView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Experience.objects.all().order_by('order', 'id')
    serializer_class = ExperienceSerializer


class EducationListView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Education.objects.all().order_by('order', 'id')
    serializer_class = EducationSerializer


class CertificationListView(generics.ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = CertificationSerializer

    def get_queryset(self):
        cert_order = [
            "Python Full Stack Training",
            "Problem Solving (Intermediate)",
            "Certificate of Merit - Debugging",
            "Web Development Internship",
            "Diploma in Computer Application",
            "National Level IT Symposium – SAIT'23",
            "Project Completion Certificate",
            "Inplant Training - MEM Development",
            "Artificial Intelligence Workshop"
        ]
        certs = list(Certification.objects.all())
        certs.sort(key=lambda c: (c.order, cert_order.index(c.title) if c.title in cert_order else len(cert_order)))
        return certs


class SocialLinkListView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = SocialLink.objects.all().order_by('order', 'id')
    serializer_class = SocialLinkSerializer


class ContactCreateView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                "status": "success",
                "message": "Thank you for your message! I will get back to you soon.",
                "data": serializer.data
            }, status=status.HTTP_201_CREATED)
        return Response({
            "status": "error",
            "message": "Please correct the errors in the form.",
            "errors": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)


def download_resume(request):
    """Serve the resume file as a forced download"""
    # Check Profile model resume field first
    profile = Profile.objects.first()
    if profile and profile.resume and os.path.exists(profile.resume.path):
        return FileResponse(open(profile.resume.path, 'rb'), content_type='application/pdf')

    # Fallback to static folder
    resume_path = os.path.join(
        settings.BASE_DIR, 'portfolio', 'static', 'portfolio', 'resume', 'Saritha_N_PythonFullStack.pdf'
    )
    if not os.path.exists(resume_path):
        resume_path = os.path.join(
            settings.BASE_DIR, 'static', 'portfolio', 'resume', 'Saritha_N_PythonFullStack.pdf'
        )
    if not os.path.exists(resume_path):
        raise Http404("Resume file not found.")

    response = FileResponse(open(resume_path, 'rb'), content_type='application/pdf')
    response['Content-Disposition'] = 'attachment; filename="Saritha_N_Resume.pdf"'
    return response
