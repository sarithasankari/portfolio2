from rest_framework import serializers
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


class ProfileSerializer(serializers.ModelSerializer):
    avatar_url = serializers.SerializerMethodField()
    resume_url = serializers.SerializerMethodField()

    class Meta:
        model = Profile
        fields = '__all__'

    def get_avatar_url(self, obj):
        request = self.context.get('request')
        if obj.avatar:
            if request:
                return request.build_absolute_uri(obj.avatar.url)
            return obj.avatar.url
        return None

    def get_resume_url(self, obj):
        request = self.context.get('request')
        if obj.resume:
            if request:
                return request.build_absolute_uri(obj.resume.url)
            return obj.resume.url
        return '/api/resume/download/'


class ProjectSerializer(serializers.ModelSerializer):
    tag_list = serializers.SerializerMethodField()
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'image', 'image_url', 'link', 'github_link', 'tags', 'tag_list', 'order']

    def get_tag_list(self, obj):
        return obj.tag_list()

    def get_image_url(self, obj):
        request = self.context.get('request')
        if obj.image:
            if request:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return None


class SkillSerializer(serializers.ModelSerializer):
    category_label = serializers.CharField(read_only=True)

    class Meta:
        model = Skill
        fields = ['id', 'name', 'proficiency', 'category', 'category_label', 'icon_class', 'order']


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ['id', 'title', 'company', 'location', 'period', 'description', 'order']


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ['id', 'degree', 'institution', 'location', 'period', 'description', 'order']


class CertificationSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Certification
        fields = ['id', 'title', 'description', 'image', 'image_url', 'period', 'link', 'order']

    def get_image_url(self, obj):
        request = self.context.get('request')
        if obj.image:
            if request:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return None


class SocialLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialLink
        fields = ['id', 'platform', 'url', 'icon_class', 'order']


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id', 'name', 'email', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']

    def validate_name(self, value):
        if not value.strip():
            raise serializers.ValidationError("Name cannot be empty.")
        return value

    def validate_message(self, value):
        if not value.strip():
            raise serializers.ValidationError("Message cannot be empty.")
        return value
