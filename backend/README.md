# Portfolio Backend (Django & Django REST Framework)

This is the backend API service for Saritha N's Full Stack Portfolio.

## Tech Stack
- **Framework:** Django 5.1+ & Django REST Framework (DRF)
- **Database:** SQLite (Default for development) / MySQL supported
- **Authentication & Permissions:** Django Admin & DRF permissions
- **Static & Media:** WhiteNoise, Pillow, Django Static & Media handlers
- **CORS:** django-cors-headers

## Features & API Endpoints
- `GET /api/profile/` - Fetch profile information, bio, contact details, statistics, resume URL
- `GET /api/skills/` - Fetch categorized skills with proficiency levels and icon classes
- `GET /api/projects/` - Fetch portfolio projects with tags, image URLs, live demo links, and GitHub links
- `GET /api/experience/` - Fetch internship and professional experience history
- `GET /api/education/` - Fetch academic qualifications and diplomas
- `GET /api/certifications/` - Fetch verified certifications with preview images and credentials
- `GET /api/social-links/` - Fetch social media and contact links
- `POST /api/contact/` - Submit a message from the contact form (validates name, email, message)
- `GET /api/resume/download/` - Download PDF resume
- `GET /admin/` - Full-featured Django Admin panel to manage all portfolio content

## Setup & Running Locally

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env
   ```

4. Run migrations:
   ```bash
   python manage.py migrate
   ```

5. (Optional) Populate default database records:
   ```bash
   python populate_db.py
   ```

6. Create a superuser to access `/admin/`:
   ```bash
   python manage.py createsuperuser
   ```

7. Start the development server:
   ```bash
   python manage.py runserver 8000
   ```
