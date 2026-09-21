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

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const results = await Promise.allSettled([
          getProfile(),
          getSkills(),
          getProjects(),
          getExperience(),
          getEducation(),
          getCertifications(),
          getSocialLinks(),
        ]);

        if (results[0].status === 'fulfilled') setProfile(results[0].value);
        if (results[1].status === 'fulfilled') setSkills(results[1].value);
        if (results[2].status === 'fulfilled') setProjects(results[2].value);
        if (results[3].status === 'fulfilled') setExperiences(results[3].value);
        if (results[4].status === 'fulfilled') setEducations(results[4].value);
        if (results[5].status === 'fulfilled') setCertifications(results[5].value);
        if (results[6].status === 'fulfilled') setSocialLinks(results[6].value);
      } catch (err) {
        console.error('Error loading portfolio data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
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
      />
      <Footer profile={profile} />
    </div>
  );
}

export default App;
