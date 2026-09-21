# Portfolio Frontend (React.js + Vite)

Modern single-page application built with React.js and Vite for Saritha N's Full Stack Developer portfolio.

## Tech Stack
- **Framework:** React 18 + Vite
- **HTTP Client:** Axios
- **Icons:** FontAwesome 6 & Devicon
- **Typography:** Playfair Display & Poppins
- **Styling:** CSS3 variables, glassmorphism, responsive grid & flexbox

## Features
- **Dynamic Content:** Connects to Django REST Framework APIs for all content (Profile, Skills, Projects, Experience, Education, Certifications, Social Links).
- **Interactive Lightbox Modal:** Full-screen zoom view for certificates with ESC & click-away dismissal.
- **Contact Form:** Real-time form validation and async submission to Django `/api/contact/` with responsive alerts.
- **Responsive Navigation:** Mobile hamburger menu with smooth section scroll.
- **Live Availability Pulse Badge:** Dynamic badge highlighting job/opportunity readiness.

## Setup & Running Locally

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create your `.env` file (pointing to the Django backend):
   ```bash
   cp .env.example .env
   ```

4. Start development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

5. Build for production:
   ```bash
   npm run build
   ```
