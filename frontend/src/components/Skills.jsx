import React from 'react';

const Skills = ({ skills = [] }) => {
  // Defined structured categories with fallback items
  const categoryConfigs = [
    {
      key: 'Languages',
      title: 'Programming Languages',
      icon: 'fas fa-code',
      matchKeys: ['Languages', 'Programming Languages'],
      fallback: [
        { name: 'Python', icon_class: 'fab fa-python' },
        { name: 'JavaScript', icon_class: 'fab fa-js' },
        { name: 'SQL', icon_class: 'fas fa-database' },
        { name: 'HTML5', icon_class: 'fab fa-html5' },
        { name: 'CSS3', icon_class: 'fab fa-css3-alt' },
      ],
    },
    {
      key: 'Frontend',
      title: 'Frontend Development',
      icon: 'fas fa-laptop-code',
      matchKeys: ['Frontend', 'FE', 'Frontend Development'],
      fallback: [
        { name: 'React.js', icon_class: 'fab fa-react' },
        { name: 'JavaScript', icon_class: 'fab fa-js-square' },
        { name: 'HTML5', icon_class: 'fab fa-html5' },
        { name: 'CSS3', icon_class: 'fab fa-css3-alt' },
        { name: 'Bootstrap', icon_class: 'fab fa-bootstrap' },
        { name: 'Tailwind CSS', icon_class: 'fas fa-wind' },
      ],
    },
    {
      key: 'Backend',
      title: 'Backend Development',
      icon: 'fas fa-server',
      matchKeys: ['Backend', 'BE', 'Backend Development'],
      fallback: [
        { name: 'Python', icon_class: 'fab fa-python' },
        { name: 'Django', icon_class: 'devicon-django-plain' },
        { name: 'Django REST Framework', icon_class: 'fas fa-code-branch' },
        { name: 'REST APIs', icon_class: 'fas fa-network-wired' },
      ],
    },
    {
      key: 'Database',
      title: 'Databases',
      icon: 'fas fa-database',
      matchKeys: ['Database', 'DB', 'Databases'],
      fallback: [
        { name: 'MySQL', icon_class: 'fas fa-database' },
        { name: 'PostgreSQL', icon_class: 'devicon-postgresql-plain' },
      ],
    },
    {
      key: 'Tools',
      title: 'Tools & Technologies',
      icon: 'fas fa-toolbox',
      matchKeys: ['Tools', 'Tools & Technologies'],
      fallback: [
        { name: 'Git', icon_class: 'fab fa-git-alt' },
        { name: 'GitHub', icon_class: 'fab fa-github' },
        { name: 'Postman', icon_class: 'fas fa-paper-plane' },
        { name: 'VS Code', icon_class: 'fas fa-code' },
        { name: 'Render', icon_class: 'fas fa-cloud-upload-alt' },
      ],
    },
    {
      key: 'Competencies',
      title: 'Core Competencies',
      icon: 'fas fa-layer-group',
      matchKeys: ['Competencies', 'Core Competencies'],
      fallback: [
        { name: 'Object-Oriented Programming', icon_class: 'fas fa-cubes' },
        { name: 'REST API Development', icon_class: 'fas fa-exchange-alt' },
        { name: 'CRUD Operations', icon_class: 'fas fa-database' },
        { name: 'Authentication & Authorization', icon_class: 'fas fa-user-lock' },
        { name: 'JWT', icon_class: 'fas fa-key' },
        { name: 'Database Management', icon_class: 'fas fa-server' },
        { name: 'Responsive Web Development', icon_class: 'fas fa-mobile-alt' },
        { name: 'API Integration', icon_class: 'fas fa-plug' },
      ],
    },
  ];

  const getSkillsForCategory = (config) => {
    const matched = skills.filter((s) => config.matchKeys.includes(s.category));
    if (matched.length > 0) return matched;
    return config.fallback;
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>My Skills</h2>
          <p className="section-subtitle">
            Structured technical capabilities across full-stack development, languages, databases, and development workflows
          </p>
        </div>

        <div className="skills-grid-layout">
          {categoryConfigs.map((cat) => {
            const items = getSkillsForCategory(cat);
            return (
              <div key={cat.key} className="skill-card-box">
                <div className="skill-card-header">
                  <div className="skill-card-icon">
                    <i className={cat.icon}></i>
                  </div>
                  <h3>{cat.title}</h3>
                </div>

                <div className="skill-tags-wrapper">
                  {items.map((item, idx) => (
                    <div key={item.id || idx} className="skill-pill">
                      {item.icon_class && <i className={item.icon_class}></i>}
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
