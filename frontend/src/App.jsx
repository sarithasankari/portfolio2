import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import {
  getProfile,
  getSkills,
  getProjects,
  getExperience,
  getEducation,
  getCertifications,
  getSocialLinks,
} from './services/api';

function App() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [socialLinks, setSocialLinks] = useState([]);

  const [loadingStates, setLoadingStates] = useState({
    profile: true,
    skills: true,
    projects: true,
    experiences: true,
    educations: true,
    certifications: true,
    socialLinks: true,
  });

  const [errors, setErrors] = useState({
    profile: null,
    skills: null,
    projects: null,
    experiences: null,
    educations: null,
    certifications: null,
    socialLinks: null,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchAllData = async () => {
      const endpoints = [
        { key: 'profile', fetcher: getProfile, setter: setProfile },
        { key: 'skills', fetcher: getSkills, setter: setSkills },
        { key: 'projects', fetcher: getProjects, setter: setProjects },
        { key: 'experiences', fetcher: getExperience, setter: setExperiences },
        { key: 'educations', fetcher: getEducation, setter: setEducations },
        { key: 'certifications', fetcher: getCertifications, setter: setCertifications },
        { key: 'socialLinks', fetcher: getSocialLinks, setter: setSocialLinks },
      ];

      await Promise.allSettled(
        endpoints.map(async ({ key, fetcher, setter }) => {
          try {
            const data = await fetcher();
            if (isMounted) {
              setter(data || []);
              setLoadingStates((prev) => ({ ...prev, [key]: false }));
            }
          } catch (err) {
            console.error(`Error loading ${key} data:`, err);
            if (isMounted) {
              setErrors((prev) => ({ ...prev, [key]: err.message || 'Failed to fetch' }));
              setLoadingStates((prev) => ({ ...prev, [key]: false }));
            }
          }
        })
      );

      if (isMounted) {
        setLoading(false);
      }
    };

    fetchAllData();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--light)',
        }}
      >
        <div className="spinner"></div>
        <p style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '1px' }}>
          Loading Portfolio...
        </p>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Navbar profile={profile} />
      <Home
        profile={profile}
        skills={skills}
        projects={projects}
        experiences={experiences}
        educations={educations}
        certifications={certifications}
        socialLinks={socialLinks}
        loadingStates={loadingStates}
        errors={errors}
      />
      <Footer profile={profile} />
    </div>
  );
}

export default App;
