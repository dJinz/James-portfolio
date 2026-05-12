import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiFirebase, SiMysql, SiXampp } from 'react-icons/si';

const TechStack = () => {
  const skills = [
    { 
      category: 'Frontend', 
      items: [
        { name: 'React', icon: <FaReact size={36} color="#61DAFB" /> },
        { name: 'JavaScript', icon: <SiJavascript size={36} color="#F7DF1E" /> },
        { name: 'HTML5', icon: <FaHtml5 size={36} color="#E34F26" /> },
        { name: 'CSS3', icon: <FaCss3Alt size={36} color="#1572B6" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={36} color="#06B6D4" /> }
      ] 
    },
    { 
      category: 'Backend', 
      items: [
        { name: 'Python', icon: <FaPython size={36} color="#3776AB" /> },
        { name: 'Firebase', icon: <SiFirebase size={36} color="#FFCA28" /> },
        { name: 'MySQL', icon: <SiMysql size={36} color="#4479A1" /> }
      ] 
    },
    { 
      category: 'Tools & Design', 
      items: [
        { name: 'Git', icon: <FaGitAlt size={36} color="#F05032" /> },
        { name: 'GitHub', icon: <FaGithub size={36} color="var(--text-primary)" /> },
        { name: 'Figma', icon: <FaFigma size={36} color="#F24E1E" /> },
        { name: 'XAMPP', icon: <SiXampp size={36} color="#FB7A24" /> }
      ] 
    }
  ];

  return (
    <section id="tech-stack" className="fade-in" style={{ backgroundColor: 'var(--bg-secondary)', padding: '100px 0' }}>
      <style>
        {`
          .tech-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2.5rem;
          }
          .tech-card {
            border: 1px solid var(--border-color);
            border-radius: 8px;
            overflow: hidden;
            background-color: var(--bg-primary);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .tech-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px -15px rgba(0,0,0,0.15);
          }
          .tech-items-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem 1rem;
            padding: 2.5rem 1.5rem;
          }
          .tech-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.8rem;
            text-align: center;
            transition: transform 0.2s ease;
          }
          .tech-item:hover {
            transform: scale(1.1);
          }
          @media (max-width: 900px) {
            .tech-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: '3rem' }}>Tech Stack</h2>
        <div className="tech-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="tech-card">
              <h3 style={{ 
                fontSize: '1.2rem', 
                padding: '1.5rem 1.2rem', 
                margin: 0,
                backgroundColor: 'var(--text-primary)',
                color: 'var(--bg-secondary)',
                fontWeight: 600,
                textAlign: 'center',
                letterSpacing: '0.5px'
              }}>
                {skillGroup.category}
              </h3>
              <div className="tech-items-grid">
                {skillGroup.items.map((item, i) => (
                  <div key={i} className="tech-item" title={item.name}>
                    {item.icon}
                    <span style={{ 
                      color: 'var(--text-primary)', 
                      fontWeight: 500,
                      fontSize: '0.9rem'
                    }}>
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
