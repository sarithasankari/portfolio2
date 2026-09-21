import os
import django
from django.core.files import File
from pathlib import Path

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from portfolio.models import (
    Profile,
    Project,
    Skill,
    Experience,
    Education,
    Certification,
    SocialLink
)

def populate():
    base_dir = Path(__file__).resolve().parent
    static_img_dir = base_dir / 'portfolio' / 'static' / 'portfolio' / 'images'
    resume_file_path = base_dir / 'portfolio' / 'static' / 'portfolio' / 'resume' / 'Saritha_N_PythonFullStack.pdf'

    print("Populating Profile...")
    profile, _ = Profile.objects.update_or_create(
        id=1,
        defaults={
            'name': "Saritha N",
            'title': "Python Full Stack Developer & Computer Science Undergraduate",
            'tagline': "Python | Django | React | SQL",
            'bio': "I build complete web applications from frontend to backend using Python, Django, and modern JavaScript frameworks. Passionate about creating seamless user experiences and scalable server solutions.",
            'about_intro': "A dedicated Python Full Stack Developer with a strong foundation in building responsive user interfaces, robust backend architectures, and database solutions using Python, Django, React, and SQL.",
            'availability_status': "Available for opportunities",
            'email': "sarithasankari154@gmail.com",
            'phone': "+91 93613 48040",
            'location': "India",
            'degree': "B.Sc CS (2022-2025)",
            'university': "Periyar University",
            'projects_count': "5+",
            'certifications_count': "9+",
            'technologies_count': "20+"
        }
    )
    if resume_file_path.exists() and not profile.resume:
        with open(resume_file_path, 'rb') as f:
            profile.resume.save('Saritha_N_Resume.pdf', File(f), save=True)
    print(f"Profile: {profile.name} - {profile.title}")

    print("\nPopulating Experience...")
    Experience.objects.all().delete()
    experiences = [
        {
            'title': "Python Full Stack Intern",
            'company': "KY Technologies",
            'location': "Tamil Nadu, India",
            'period': "May 2026 – June 2026",
            'description': "Worked on full-stack web application development using Python, Django, React, JavaScript, and SQL. Gained practical experience in developing frontend interfaces, integrating REST APIs, working with databases, debugging application issues, and implementing responsive web features.",
            'order': 1
        },
        {
            'title': "Web Development Intern",
            'company': "CodeBind Technologies",
            'location': "Chennai, India",
            'period': "May 2024 – June 2024",
            'description': "Worked on full-stack web development projects, developing e-commerce features with HTML, CSS, JavaScript, PHP, and MySQL database integration.",
            'order': 2
        },
        {
            'title': "Inplant Training - MEM Development",
            'company': "CodeBind Technologies",
            'location': "Chennai, India",
            'period': "June 2024",
            'description': "Underwent hands-on inplant training covering MEM development workflows and practical software architecture.",
            'order': 3
        }
    ]
    for exp in experiences:
        obj = Experience.objects.create(**exp)
        print(f"Created Experience: {obj.title} at {obj.company}")

    print("\nPopulating Education...")
    Education.objects.all().delete()
    educations = [
        {
            'degree': "B.Sc Computer Science",
            'institution': "Periyar University",
            'location': "Tamil Nadu, India",
            'period': "2022 – 2025",
            'description': "Studied core areas of Computer Science including Data Structures, Database Management, Object-Oriented Programming, Software Engineering, and Web Technologies.",
            'order': 1
        },
        {
            'degree': "Diploma in Computer Application (DCA)",
            'institution': "CSC Computer Training Academy",
            'location': "Tamil Nadu, India",
            'period': "August 2023 – November 2023",
            'description': "Training in IT Fundamentals, Microsoft Office, Computer Applications, and Python Programming.",
            'order': 2
        },
        {
            'degree': "Python Full Stack Development",
            'institution': "SLA Institute",
            'location': "Tamil Nadu, India",
            'period': "June 2025 – November 2025",
            'description': "Hands-on training in Python, Django, SQL, HTML, CSS, JavaScript, React, REST APIs, and full-stack web application development.",
            'order': 3
        }
    ]
    for edu in educations:
        obj = Education.objects.create(**edu)
        print(f"Created Education: {obj.degree} ({obj.period})")

    print("\nPopulating Social Links...")
    SocialLink.objects.all().delete()
    socials = [
        {'platform': "Email", 'url': "mailto:sarithasankari154@gmail.com", 'icon_class': "fas fa-envelope", 'order': 1},
        {'platform': "GitHub", 'url': "https://github.com/sarithasankari", 'icon_class': "fab fa-github", 'order': 2},
        {'platform': "LinkedIn", 'url': "https://www.linkedin.com/in/saritha-n-a872a9299/", 'icon_class': "fab fa-linkedin-in", 'order': 3},
        {'platform': "Instagram", 'url': "https://www.instagram.com/_._saritha__/", 'icon_class': "fab fa-instagram", 'order': 4},
    ]
    for soc in socials:
        obj = SocialLink.objects.create(**soc)
        print(f"Created SocialLink: {obj.platform}")

    print("\nCleaning up deprecated projects...")
    Project.objects.filter(title__icontains="Movie Search App").delete()

    print("Populating Projects...")
    projects = [
        {
            'title': "Roadside Assistance Platform",
            'description': "A comprehensive web application connecting users with roadside service providers for emergency vehicle assistance, towing, and repair services. It features real-time request tracking, provider matchmaking, and interactive dashboards for smooth service coordination.",
            'image_name': "road.jpg",
            'tags': "HTML, CSS, JavaScript, Django, Python",
            'link': "https://roadside-assistance-ocu7.onrender.com",
            'github_link': "https://github.com/sarithasankari",
            'order': 1
        },
        {
            'title': "Review Analyzer",
            'description': "Developed a review analysis web application using Django and MySQL. The system manages customer reviews, processes review data, and provides analytical insights through an interactive dashboard.",
            'image_name': "review_analyzer.png",
            'tags': "Django, MySQL, HTML, CSS, JavaScript, Python",
            'link': "https://review-analyzer-1-lgco.onrender.com",
            'github_link': "https://github.com/sarithasankari",
            'order': 2
        },
        {
            'title': "Customer Relationship Management (CRM) System",
            'description': "Developed a full-stack CRM application for managing customer information and business interactions. Built a responsive frontend using React.js and Tailwind CSS, integrated with a Django backend and SQL database. Implemented authentication, customer management, and CRUD functionalities.",
            'image_name': "crm_project.png",
            'tags': "React.js, Tailwind CSS, Django, SQL, Python",
            'link': "https://github.com/sarithasankari/CRM",
            'github_link': "https://github.com/sarithasankari/CRM",
            'order': 3
        },
        {
            'title': "Online Shopping Website",
            'description': "A functional e-commerce website with product listings, shopping cart, and checkout workflow built with frontend technologies, server logic, and database management.",
            'image_name': "one.jpg",
            'tags': "HTML, CSS, JavaScript, PHP, MySQL",
            'link': "https://sarithann.neocities.org/shop/shopping/",
            'github_link': "https://github.com/sarithasankari",
            'order': 4
        },
        {
            'title': "Guide Assistance",
            'description': "Guide Assistance is a full-stack travel platform that helps travelers discover destinations and connect with suitable local guides. The application provides destination search, category-based browsing, guide discovery, filtering, booking, user authentication, reviews, and dashboard features. The React frontend communicates with a Django REST Framework backend using REST APIs, with MySQL used for data management.",
            'image_name': "guide_assistance.png",
            'tags': "React.js, Django, Django REST Framework, Python, MySQL, Tailwind CSS",
            'link': "https://github.com/sarithasankari/Guide",
            'github_link': "https://github.com/sarithasankari/Guide",
            'order': 5
        }
    ]

    for p_data in projects:
        project, _ = Project.objects.update_or_create(
            title=p_data['title'],
            defaults={
                'description': p_data['description'],
                'tags': p_data['tags'],
                'link': p_data['link'],
                'github_link': p_data['github_link'],
                'order': p_data['order']
            }
        )
        img_path = static_img_dir / p_data['image_name']
        if img_path.exists():
            with open(img_path, 'rb') as f:
                project.image.save(p_data['image_name'], File(f), save=True)
        print(f"Updated Project: {project.title}")

    print("\nPopulating Skills with structured categories...")
    Skill.objects.all().delete()
    skills_data = [
        # 1. Programming Languages
        {'name': "Python", 'proficiency': 90, 'category': 'Languages', 'icon_class': "fab fa-python", 'order': 1},
        {'name': "JavaScript", 'proficiency': 85, 'category': 'Languages', 'icon_class': "fab fa-js", 'order': 2},
        {'name': "SQL", 'proficiency': 85, 'category': 'Languages', 'icon_class': "fas fa-database", 'order': 3},
        {'name': "HTML5", 'proficiency': 95, 'category': 'Languages', 'icon_class': "fab fa-html5", 'order': 4},
        {'name': "CSS3", 'proficiency': 90, 'category': 'Languages', 'icon_class': "fab fa-css3-alt", 'order': 5},

        # 2. Frontend Development
        {'name': "React.js", 'proficiency': 85, 'category': 'Frontend', 'icon_class': "fab fa-react", 'order': 6},
        {'name': "JavaScript (ES6+)", 'proficiency': 85, 'category': 'Frontend', 'icon_class': "fab fa-js-square", 'order': 7},
        {'name': "HTML5", 'proficiency': 95, 'category': 'Frontend', 'icon_class': "fab fa-html5", 'order': 8},
        {'name': "CSS3", 'proficiency': 90, 'category': 'Frontend', 'icon_class': "fab fa-css3-alt", 'order': 9},
        {'name': "Bootstrap", 'proficiency': 80, 'category': 'Frontend', 'icon_class': "fab fa-bootstrap", 'order': 10},
        {'name': "Tailwind CSS", 'proficiency': 80, 'category': 'Frontend', 'icon_class': "fas fa-wind", 'order': 11},

        # 3. Backend Development
        {'name': "Python", 'proficiency': 90, 'category': 'Backend', 'icon_class': "fab fa-python", 'order': 12},
        {'name': "Django", 'proficiency': 85, 'category': 'Backend', 'icon_class': "devicon-django-plain", 'order': 13},
        {'name': "Django REST Framework", 'proficiency': 85, 'category': 'Backend', 'icon_class': "fas fa-code-branch", 'order': 14},
        {'name': "REST APIs", 'proficiency': 85, 'category': 'Backend', 'icon_class': "fas fa-network-wired", 'order': 15},

        # 4. Databases
        {'name': "MySQL", 'proficiency': 85, 'category': 'Database', 'icon_class': "fas fa-database", 'order': 16},
        {'name': "PostgreSQL", 'proficiency': 80, 'category': 'Database', 'icon_class': "devicon-postgresql-plain", 'order': 17},

        # 5. Tools & Technologies
        {'name': "Git", 'proficiency': 85, 'category': 'Tools', 'icon_class': "fab fa-git-alt", 'order': 18},
        {'name': "GitHub", 'proficiency': 85, 'category': 'Tools', 'icon_class': "fab fa-github", 'order': 19},
        {'name': "Postman", 'proficiency': 85, 'category': 'Tools', 'icon_class': "fas fa-paper-plane", 'order': 20},
        {'name': "VS Code", 'proficiency': 90, 'category': 'Tools', 'icon_class': "fas fa-code", 'order': 21},
        {'name': "Render", 'proficiency': 80, 'category': 'Tools', 'icon_class': "fas fa-cloud-upload-alt", 'order': 22},

        # 6. Core Competencies
        {'name': "Object-Oriented Programming", 'proficiency': 85, 'category': 'Competencies', 'icon_class': "fas fa-cubes", 'order': 23},
        {'name': "REST API Development", 'proficiency': 85, 'category': 'Competencies', 'icon_class': "fas fa-exchange-alt", 'order': 24},
        {'name': "CRUD Operations", 'proficiency': 90, 'category': 'Competencies', 'icon_class': "fas fa-database", 'order': 25},
        {'name': "Authentication & Authorization", 'proficiency': 80, 'category': 'Competencies', 'icon_class': "fas fa-user-lock", 'order': 26},
        {'name': "JWT", 'proficiency': 80, 'category': 'Competencies', 'icon_class': "fas fa-key", 'order': 27},
        {'name': "Database Management", 'proficiency': 85, 'category': 'Competencies', 'icon_class': "fas fa-server", 'order': 28},
        {'name': "Responsive Web Development", 'proficiency': 90, 'category': 'Competencies', 'icon_class': "fas fa-mobile-alt", 'order': 29},
        {'name': "API Integration", 'proficiency': 85, 'category': 'Competencies', 'icon_class': "fas fa-plug", 'order': 30},
    ]

    for s_data in skills_data:
        Skill.objects.create(**s_data)

    print(f"Created {len(skills_data)} skills across 6 categories.")

    print("\nPopulating Certifications...")
    certs = [
        {
            'title': "Python Full Stack Training",
            'description': 'Successfully completed Python Full Stack training program with Grade "A" from SLA Institute.',
            'period': "June 2025 – November 2025",
            'image_name': "cr8.jpg",
            'order': 1
        },
        {
            'title': "Problem Solving (Intermediate)",
            'description': "Passed the HackerRank skill certification test for Problem Solving (Intermediate).",
            'period': "03 Mar, 2026",
            'image_name': "hackerrank_cert.png",
            'order': 2
        },
        {
            'title': "Certificate of Merit - Debugging",
            'description': "Awarded Second Place in Debugging competition at Government Arts College, Dharmapuri.",
            'period': "Mar 2023",
            'image_name': "cr7.jpg",
            'order': 3
        },
        {
            'title': "Web Development Internship",
            'description': "Successfully completed an internship in web development at CodeBind Technologies, Chennai.",
            'period': "May - June 2024",
            'image_name': "cr1.jpg",
            'order': 4
        },
        {
            'title': "Diploma in Computer Application",
            'description': "Completed Diploma in Computer Application with specialization in IT Fundamentals, Microsoft Office, and Python.",
            'period': "August 2023 – November 2023",
            'image_name': "cr3.jpg",
            'order': 5
        },
        {
            'title': "National Level IT Symposium – SAIT'23",
            'description': "Participated in the National Level IT Symposium organized by Sacred Heart College, Tirupattur.",
            'period': "Feb 2023",
            'image_name': "cr5.jpg",
            'order': 6
        },
        {
            'title': "Project Completion Certificate",
            'description': 'Successfully completed the project "Online shopping website using HTML, CSS, JavaScript, PHP and MySQL" at CodeBind Technologies.',
            'period': "May - June 2024",
            'image_name': "cr6.jpg",
            'order': 7
        },
        {
            'title': "Inplant Training - MEM Development",
            'description': "Underwent Inplant Training in MEM Development at CodeBind Technologies, Chennai.",
            'period': "June 2024",
            'image_name': "cr4.jpg",
            'order': 8
        },
        {
            'title': "Artificial Intelligence Workshop",
            'description': "Participated in a one-day workshop on Artificial Intelligence at CodeBind Technologies, Chennai.",
            'period': "2024",
            'image_name': "cr2.jpg",
            'order': 9
        },
    ]

    for c_data in certs:
        cert, _ = Certification.objects.update_or_create(
            title=c_data['title'],
            defaults={
                'description': c_data['description'],
                'period': c_data['period'],
                'order': c_data['order']
            }
        )
        img_path = static_img_dir / c_data['image_name']
        if img_path.exists():
            with open(img_path, 'rb') as f:
                cert.image.save(c_data['image_name'], File(f), save=True)
        print(f"Updated Certification: {cert.title} ({cert.period})")

    print("\nDatabase refresh completed successfully!")

if __name__ == '__main__':
    populate()
