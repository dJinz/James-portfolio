import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const figmaProjects = [
    {
      title: 'Price Crop Prediction',
      category: 'UI/UX Design',
      embedUrl: 'https://www.figma.com/embed?embed_host=share&url=' + encodeURIComponent('https://www.figma.com/proto/q5Oq38RuB00wTG4eYB33R3/HCI-102?node-id=76-805&p=f&t=lJ95AWYSK2BgI40w-1&scaling=scale-down&content-scaling=fixed&page-id=60%3A2&starting-point-node-id=76%3A805')
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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
      </div>
    </section>
  );
};

export default React.memo(Projects);
