from django.db import models


class Profile(models.Model):
    name = models.CharField(max_length=100, default="Saritha N")
    title = models.CharField(max_length=200, default="Python Full Stack Developer")
    tagline = models.CharField(max_length=255, blank=True, default="Python | Django | React | SQL")
    bio = models.TextField(default="I build complete web applications from frontend to backend using Python, Django, React, and modern JavaScript technologies. I enjoy developing responsive user interfaces, scalable backend solutions, and REST APIs while focusing on clean, efficient, and user-friendly applications.")
    about_intro = models.TextField(default="A dedicated Python Full Stack Developer with a strong foundation in building responsive user interfaces, robust backend architectures, and database solutions using Python, Django, React, and SQL.")
    avatar = models.ImageField(upload_to='profile/', blank=True, null=True)
    resume = models.FileField(upload_to='resumes/', blank=True, null=True)
    availability_status = models.CharField(max_length=100, default="Available for opportunities")
    email = models.EmailField(default="sarithasankari154@gmail.com")
    phone = models.CharField(max_length=30, default="+91 93613 48040")
    location = models.CharField(max_length=100, default="India")
    degree = models.CharField(max_length=100, default="B.Sc CS")
    university = models.CharField(max_length=150, default="Periyar University")
    projects_count = models.CharField(max_length=20, default="5+")
    certifications_count = models.CharField(max_length=20, default="9+")
    technologies_count = models.CharField(max_length=20, default="20+")
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Profile"
        verbose_name_plural = "Profile"

    def __str__(self):
        return self.name


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/')
    link = models.URLField(blank=True)
    github_link = models.URLField(blank=True, default="")
    tags = models.CharField(max_length=200, help_text="Comma-separated tags e.g. 'Django, React, MySQL'")
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order', 'id']

    def tag_list(self):
        return [tag.strip() for tag in self.tags.split(',')] if self.tags else []

    def __str__(self):
        return self.title


class Skill(models.Model):
    CATEGORY_CHOICES = [
        ('Languages', 'Programming Languages'),
        ('Frontend', 'Frontend Development'),
        ('Backend', 'Backend Development'),
        ('Database', 'Databases'),
        ('Tools', 'Tools & Technologies'),
        ('Competencies', 'Core Competencies'),
        # Backward compatibility aliases
        ('FE', 'Frontend Development'),
        ('BE', 'Backend Development'),
        ('DB', 'Databases'),
    ]
    name = models.CharField(max_length=100)
    proficiency = models.IntegerField(default=85, help_text="Percentage (0-100)")
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    icon_class = models.CharField(max_length=100, blank=True, help_text="FontAwesome or Devicon class e.g., 'fab fa-python'")
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order', 'id']

    @property
    def category_label(self):
        mapping = {
            'Languages': 'Programming Languages',
            'Frontend': 'Frontend Development',
            'Backend': 'Backend Development',
            'Database': 'Databases',
            'Tools': 'Tools & Technologies',
            'Competencies': 'Core Competencies',
            'FE': 'Frontend Development',
            'BE': 'Backend Development',
            'DB': 'Databases',
        }
        return mapping.get(self.category, self.category)

    def __str__(self):
        return f"{self.name} ({self.proficiency}%)"


class Experience(models.Model):
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    location = models.CharField(max_length=100, blank=True, default="Chennai, India")
    period = models.CharField(max_length=100, help_text="e.g. May - June 2024")
    description = models.TextField()
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return f"{self.title} at {self.company}"


class Education(models.Model):
    degree = models.CharField(max_length=200)
    institution = models.CharField(max_length=200)
    location = models.CharField(max_length=100, blank=True, default="India")
    period = models.CharField(max_length=100, help_text="e.g. 2021 - 2024")
    description = models.TextField(blank=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order', 'id']
        verbose_name_plural = "Education"

    def __str__(self):
        return f"{self.degree} - {self.institution}"


class Certification(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='certifications/')
    period = models.CharField(max_length=100, help_text="e.g., May-June 2024")
    link = models.URLField(blank=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return self.title


class SocialLink(models.Model):
    platform = models.CharField(max_length=50)
    url = models.CharField(max_length=255)
    icon_class = models.CharField(max_length=100, help_text="FontAwesome class e.g. 'fab fa-github'")
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return self.platform


class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Message from {self.name} ({self.email})"
