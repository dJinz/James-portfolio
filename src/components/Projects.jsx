import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, ExternalLink } from 'lucide-react';
import internConnectLogo from '../assets/InternConnect.png';

const Projects = () => {
  const figmaProjects = [
    {
      title: 'Price Crop Prediction',
      category: 'UI/UX Design',
      embedUrl: 'https://www.figma.com/embed?embed_host=share&url=' + encodeURIComponent('https://www.figma.com/proto/q5Oq38RuB00wTG4eYB33R3/HCI-102?node-id=76-805&p=f&t=lJ95AWYSK2BgI40w-1&scaling=scale-down&content-scaling=fixed&page-id=60%3A2&starting-point-node-id=76%3A805')
    }
  ];

  const devProjects = [
    {
      title: 'InternConnect',
      category: 'Web Development',
      description: 'A comprehensive internship portal built to seamlessly connect student applicants with partner industries. Features robust student applications, secure industrial verification, time tracking logs, and a clean professional UI dashboard.',
      techStack: ['PHP', 'MySQL', 'JavaScript', 'Ajax', 'jQuery', 'HTML/CSS'],
      image: internConnectLogo,
      githubUrl: 'https://github.com/WqNTqP/InternConnect',
      demoUrl: 'https://drive.google.com/file/d/1gpHZHUzzxDe8VJsoZfXeYMBCe6XoBOFy/preview',
      demoOriginalUrl: 'https://drive.google.com/file/d/1gpHZHUzzxDe8VJsoZfXeYMBCe6XoBOFy/view?usp=drivesdk'
    },
    {
      title: 'DTR-App',
      category: 'Web Application',
      description: 'An employee Daily Time Record (DTR) tracking system facilitating effortless real-time clock-in/out logging, monthly attendance summaries, and responsive tracking metrics.',
      techStack: ['React', 'Firebase'],
      image: null,
      githubUrl: null,
      demoUrl: null,
      demoOriginalUrl: null
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [demoVideoUrl, setDemoVideoUrl] = useState(null);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % figmaProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + figmaProjects.length) % figmaProjects.length);
  };

  const currentProject = figmaProjects[currentIndex];

  const buttonStyle = {
    background: 'var(--bg-primary)',
    border: '1px solid var(--border-color)',
    color: 'var(--text-primary)',
    width: '3.5rem',
    height: '3.5rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    flexShrink: 0
  };

  // Inline SVG Github Icon Component
  const GithubIcon = ({ size = 18 }) => (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );

  return (
    <section id="projects" style={{ backgroundColor: 'var(--bg-secondary)', padding: '6rem 0' }}>
      <div className="container">
        <h2 className="section-title fade-in" style={{ marginBottom: '3rem' }}>Selected Work</h2>

        <div className="fade-in" style={{ animationDelay: '0.2s', maxWidth: '800px', margin: '0 auto' }}>
          {/* Title above presentation */}
          <div className="project-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 600, margin: 0 }}>{currentProject.title}</h3>
            <span style={{ padding: '0.4rem 1rem', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{currentProject.category}</span>
          </div>

          {/* Presentation and side buttons */}
          <div className="project-presentation" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', width: '100%' }}>
            {/* Prev Button */}
            {figmaProjects.length > 1 && (
              <button
                className="nav-btn-prev"
                onClick={prevProject}
                style={buttonStyle}
                onMouseOver={e => { e.currentTarget.style.backgroundColor = 'var(--text-primary)'; e.currentTarget.style.color = 'var(--bg-primary)'; }}
                onMouseOut={e => { e.currentTarget.style.backgroundColor = 'var(--bg-primary)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                aria-label="Previous Project"
              >
                <ChevronLeft size={28} />
              </button>
            )}

            {/* Figma Embed */}
            <div className="figma-embed-container" style={{
              width: '100%',
              maxWidth: '400px',
              height: '800px',
              backgroundColor: 'var(--bg-primary)',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '4px solid var(--border-color)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            }}>
              <iframe
                key={currentProject.embedUrl}
                style={{ border: 'none', width: '100%', height: '100%' }}
                src={currentProject.embedUrl}
                allowFullScreen
                loading="lazy"
                title={currentProject.title}
              ></iframe>
            </div>

            {/* Next Button */}
            {figmaProjects.length > 1 && (
              <button
                className="nav-btn-next"
                onClick={nextProject}
                style={buttonStyle}
                onMouseOver={e => { e.currentTarget.style.backgroundColor = 'var(--text-primary)'; e.currentTarget.style.color = 'var(--bg-primary)'; }}
                onMouseOut={e => { e.currentTarget.style.backgroundColor = 'var(--bg-primary)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                aria-label="Next Project"
              >
                <ChevronRight size={28} />
              </button>
            )}
          </div>

          {/* Pagination Indicators */}
          {figmaProjects.length > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem', gap: '0.5rem' }}>
              {figmaProjects.map((_, idx) => (
                <div
                  key={idx}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: idx === currentIndex ? 'var(--text-primary)' : 'var(--border-color)',
                    transition: 'background-color 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Development Projects */}
        <div className="fade-in" style={{ animationDelay: '0.4s', maxWidth: '1000px', margin: '6rem auto 0' }}>
          <h3 className="section-title" style={{ marginBottom: '3rem', textAlign: 'center', fontSize: '2.5rem' }}>Development Projects</h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
            {devProjects.map((project, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '24px',
                  padding: '2rem',
                  boxShadow: hoveredCardIndex === idx 
                    ? '0 20px 40px rgba(0,0,0,0.1)' 
                    : '0 10px 30px rgba(0,0,0,0.05)',
                  transform: hoveredCardIndex === idx 
                    ? 'translateY(-8px)' 
                    : 'translateY(0)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={() => setHoveredCardIndex(idx)}
                onMouseLeave={() => setHoveredCardIndex(null)}
              >
                {/* Project Showcase Image */}
                <div style={{
                  width: '100%',
                  height: '180px',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  marginBottom: '1.5rem',
                  border: '1px solid var(--border-color)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      style={{
                        maxWidth: '90%',
                        maxHeight: '90%',
                        objectFit: 'contain',
                        transform: hoveredCardIndex === idx ? 'scale(1.05)' : 'scale(1)',
                        transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    />
                  ) : (
                    <div style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      fontFamily: 'monospace',
                      opacity: 0.65,
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      [Not Available]
                    </div>
                  )}
                </div>

                {/* Info Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{project.category}</span>
                </div>

                <h4 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>{project.title}</h4>
                
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6', flexGrow: 0 }}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div style={{ marginBottom: '2rem', flexGrow: 1 }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', fontWeight: 600 }}>Tech Stack:</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i} 
                        style={{ 
                          padding: '0.4rem 1rem', 
                          backgroundColor: 'var(--bg-secondary)', 
                          border: '1px solid var(--border-color)', 
                          borderRadius: '20px', 
                          fontSize: '0.85rem', 
                          color: 'var(--text-primary)',
                          fontWeight: 500,
                          boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1.25rem', 
                  marginTop: 'auto', 
                  paddingTop: '1.5rem', 
                  borderTop: '1px solid var(--border-color)' 
                }}>
                  {project.githubUrl ? (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.9rem',
                        color: 'var(--text-primary)',
                        fontWeight: 600,
                        transition: 'color 0.2s ease'
                      }}
                      onMouseOver={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                      onMouseOut={e => e.currentTarget.style.color = 'var(--text-primary)'}
                    >
                      <GithubIcon size={18} />
                      <span>GitHub</span>
                    </a>
                  ) : (
                    <span style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      opacity: 0.5,
                      cursor: 'not-allowed'
                    }}>
                      <GithubIcon size={18} />
                      <span>No Repo</span>
                    </span>
                  )}

                  {project.demoUrl ? (
                    <button 
                      onClick={() => setDemoVideoUrl(project.demoUrl)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.9rem',
                        color: 'var(--bg-primary)',
                        backgroundColor: 'var(--text-primary)',
                        border: 'none',
                        borderRadius: '12px',
                        padding: '0.5rem 1rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        marginLeft: 'auto'
                      }}
                      onMouseOver={e => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
                      }}
                      onMouseOut={e => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                      }}
                    >
                      <Play size={14} fill="currentColor" />
                      <span>Watch Demo</span>
                    </button>
                  ) : (
                    <span style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      fontStyle: 'italic',
                      opacity: 0.6,
                      marginLeft: 'auto'
                    }}>
                      No Demo
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Demo Lightbox Modal */}
      {demoVideoUrl && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(10px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          animation: 'fadeIn 0.3s ease'
        }}
        onClick={() => setDemoVideoUrl(null)}
        >
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '900px',
            aspectRatio: '16/9',
            backgroundColor: '#000',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}
          onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setDemoVideoUrl(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff',
                borderRadius: '50%',
                width: '3rem',
                height: '3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
                zIndex: 1001
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>&times;</span>
            </button>

            <iframe
              src={demoVideoUrl}
              style={{ border: 'none', width: '100%', height: '100%' }}
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Project Video Demo"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default React.memo(Projects);

