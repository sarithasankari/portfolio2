from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
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


class PortfolioAPITests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.profile = Profile.objects.create(
            name="Saritha N",
            title="Python Full Stack Developer",
            bio="Test Bio",
            email="sarithasankari154@gmail.com"
        )
        self.skill = Skill.objects.create(
            name="Python",
            proficiency=90,
            category="BE",
            icon_class="fab fa-python"
        )
        self.project = Project.objects.create(
            title="Roadside Assistance Platform",
            description="Test project description",
            tags="Django, React, SQLite",
            link="https://example.com"
        )
        self.experience = Experience.objects.create(
            title="Web Development Intern",
            company="CodeBind Technologies",
            period="May - June 2024",
            description="Internship experience description"
        )
        self.education = Education.objects.create(
            degree="B.Sc Computer Science",
            institution="Periyar University",
            period="2021 - 2024"
        )
        self.certification = Certification.objects.create(
            title="Python Full Stack Training",
            description="Certified Full Stack",
            period="Nov 2025"
        )
        self.social_link = SocialLink.objects.create(
            platform="GitHub",
            url="https://github.com/sarithasankari",
            icon_class="fab fa-github"
        )

    def test_get_profile(self):
        response = self.client.get('/api/profile/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['name'], 'Saritha N')

    def test_get_skills(self):
        response = self.client.get('/api/skills/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertGreaterEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['name'], 'Python')

    def test_get_projects(self):
        response = self.client.get('/api/projects/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertGreaterEqual(len(response.data), 1)
        self.assertIn('Django', response.data[0]['tag_list'])

    def test_get_experience(self):
        response = self.client.get('/api/experience/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertGreaterEqual(len(response.data), 1)

    def test_get_education(self):
        response = self.client.get('/api/education/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertGreaterEqual(len(response.data), 1)

    def test_get_certifications(self):
        response = self.client.get('/api/certifications/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertGreaterEqual(len(response.data), 1)

    def test_get_social_links(self):
        response = self.client.get('/api/social-links/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertGreaterEqual(len(response.data), 1)

    def test_post_contact_valid(self):
        data = {
            'name': 'Recruiter Name',
            'email': 'recruiter@company.com',
            'message': 'We would love to discuss a developer position with you.'
        }
        response = self.client.post('/api/contact/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(ContactMessage.objects.count(), 1)
        self.assertEqual(ContactMessage.objects.first().name, 'Recruiter Name')

    def test_post_contact_invalid(self):
        data = {
            'name': '',
            'email': 'not-an-email',
            'message': ''
        }
        response = self.client.post('/api/contact/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
