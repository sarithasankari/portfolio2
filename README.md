# Saritha N - Full Stack Developer Portfolio

A decoupled full-stack personal portfolio application built with **React.js** on the frontend and **Django REST Framework (DRF)** on the backend.

```
React.js (Vite Frontend)  ───>  Django REST Framework (DRF APIs)  ───>  Database (SQLite/MySQL)
  http://localhost:5173                   http://127.0.0.1:8000
```

---

## Project Structure

```
portfolio/
│
├── frontend/                     # React.js SPA (Vite)
│   ├── public/
│   │   ├── images/              # Static project & certification image fallbacks
│   │   └── favicon.ico
│   ├── src/
│   │   ├── assets/              # Icons and images
│   │   ├── components/          # Reusable UI components
│   │   │   ├── Navbar.jsx       # Responsive sticky navigation bar
│   │   │   ├── Hero.jsx         # Hero section with live availability pulse
│   │   │   ├── About.jsx        # About me with stats and highlights
│   │   │   ├── Skills.jsx       # Categorized skills with proficiency bars
│   │   │   ├── Projects.jsx     # Project cards with links and tags
│   │   │   ├── Experience.jsx   # Work and internship experience timeline
│   │   │   ├── Education.jsx    # Academic history timeline
│   │   │   ├── Certifications.jsx # Certificate gallery with interactive lightbox
│   │   │   ├── Contact.jsx      # Contact form with backend POST submission
│   │   │   └── Footer.jsx       # Footer with navigation and copyright
│   │   ├── pages/
│   │   │   ├── Home.jsx         # Main one-page assembly
│   │   │   └── NotFound.jsx     # 404 fallback page
│   │   ├── services/
│   │   │   └── api.js           # Axios API client connecting to Django DRF
│   │   ├── App.jsx              # Main React component with async data fetching
│   │   ├── main.jsx             # React DOM root entry
│   │   └── index.css            # Complete design system tokens and responsive styles
│   ├── .env                     # Local frontend environment variables
│   ├── .env.example             # Example environment template
│   ├── package.json             # NPM dependencies and scripts
│   ├── vite.config.js           # Vite build and dev server configuration
│   └── README.md
│
├── backend/                      # Django & Django REST Framework
│   ├── manage.py                # Django CLI tool
│   ├── config/                  # Core Django project configuration
│   │   ├── __init__.py
│   │   ├── settings.py          # DRF, CORS, media/static, and dotenv settings
│   │   ├── urls.py              # Root URL routing for /api/, /admin/, and /media/
│   │   ├── asgi.py
│   │   └── wsgi.py
│   ├── portfolio/               # Portfolio Django app
│   │   ├── __init__.py
│   │   ├── admin.py             # Rich Django admin management for all content
│   │   ├── apps.py
│   │   ├── models.py            # Profile, Skill, Project, Experience, Education, etc.
│   │   ├── serializers.py       # DRF serializers
│   │   ├── views.py             # DRF API views and resume download handler
│   │   ├── urls.py              # REST API endpoint definitions
│   │   ├── tests.py
│   │   └── migrations/          # Schema migrations
│   ├── media/                   # Uploaded project and certificate media files
│   ├── static/                  # Static assets
│   ├── staticfiles/             # Collected static files for production
│   ├── populate_db.py           # Database initial population script
│   ├── requirements.txt         # Python dependencies
│   ├── .env                     # Backend environment configuration
│   ├── .env.example             # Backend environment template
│   ├── .gitignore
│   └── README.md
│
├── README.md                     # Root project documentation
└── .gitignore                    # Global git ignore rules
```

---

## Quick Start (Running Locally)

### 1. Start Backend (Django REST Framework)
```bash
cd backend

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# (Optional) Populate data if running fresh
python populate_db.py

# Start Django server (runs on http://127.0.0.1:8000)
python manage.py runserver
```

### 2. Start Frontend (React + Vite)
In a separate terminal:
```bash
cd frontend

# Install dependencies
npm install

# Start Vite dev server (runs on http://localhost:5173)
npm run dev
```

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/profile/` | Personal bio, stats, and contact info |
| `GET` | `/api/skills/` | Categorized technical skills |
| `GET` | `/api/projects/` | Projects with images, tags, and URLs |
| `GET` | `/api/experience/` | Professional & internship experience |
| `GET` | `/api/education/` | Academic credentials |
| `GET` | `/api/certifications/`| Verified certifications & images |
| `GET` | `/api/social-links/` | Social media profiles |
| `POST`| `/api/contact/` | Submit contact message |
| `GET` | `/api/resume/download/` | Direct resume PDF download |
| `GET` | `/admin/` | Django Admin panel to manage all data |

---

## Production Build

### Frontend
```bash
cd frontend
npm run build
```
Creates an optimized static bundle in `frontend/dist/`.

### Backend
```bash
cd backend
python manage.py collectstatic --noinput
gunicorn config.wsgi:application
```
