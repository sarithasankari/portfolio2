from django.contrib import admin
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


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'title', 'email', 'phone', 'location', 'updated_at')
    fieldsets = (
        ('Basic Information', {
            'fields': ('name', 'title', 'tagline', 'bio', 'about_intro', 'avatar', 'resume', 'availability_status')
        }),
        ('Contact Information', {
            'fields': ('email', 'phone', 'location')
        }),
        ('Statistics & Education Highlights', {
            'fields': ('degree', 'university', 'projects_count', 'certifications_count', 'technologies_count')
        }),
    )


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'tags', 'link', 'order')
    list_editable = ('order',)
    search_fields = ('title', 'description', 'tags')


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'proficiency', 'category', 'icon_class', 'order')
    list_editable = ('proficiency', 'category', 'order')
    list_filter = ('category',)
    search_fields = ('name',)


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('title', 'company', 'period', 'location', 'order')
    list_editable = ('order',)
    search_fields = ('title', 'company', 'description')


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ('degree', 'institution', 'period', 'order')
    list_editable = ('order',)
    search_fields = ('degree', 'institution')


@admin.register(Certification)
class CertificationAdmin(admin.ModelAdmin):
    list_display = ('title', 'period', 'link', 'order')
    list_editable = ('order',)
    search_fields = ('title', 'description', 'period')


@admin.register(SocialLink)
class SocialLinkAdmin(admin.ModelAdmin):
    list_display = ('platform', 'url', 'icon_class', 'order')
    list_editable = ('order',)
    search_fields = ('platform',)


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'created_at', 'is_read')
    list_filter = ('is_read', 'created_at')
    search_fields = ('name', 'email', 'message')
    readonly_fields = ('name', 'email', 'message', 'created_at')
