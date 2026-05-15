import React from 'react';

const Hero = () => {
  return (
    <section id="about" className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <div className="fade-in hero-content" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '4rem' }}>
        <div className="hero-text" style={{ flex: '1 1 500px', maxWidth: '600px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Hello, I'm
          </h2>
          <h1 className="hero-title" style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-1.5px' }}>
            James Harold Roble.<br />
            <span className="hero-subtitle" style={{ color: 'var(--text-secondary)', fontSize: '2.5rem', display: 'block', marginTop: '0.5rem' }}>UI/UX designer, front end dev and Tech Support</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '3rem' }}>
            An aspiring technical support currently studying IT at Holy Cross of Davao College. I am a passionate designer and developer dedicated to crafting clean, intuitive, and visually stunning interfaces. Welcome to my portfolio.
          </p>
          <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              backgroundColor: 'var(--text-primary)',
              color: 'var(--bg-primary)',
              fontWeight: 500,
              borderRadius: '4px',
              transition: 'transform 0.2s ease',
              textDecoration: 'none'
            }} onMouseOver={e => e.target.style.transform = 'translateY(-2px)'} onMouseOut={e => e.target.style.transform = 'translateY(0)'}>
              View My Work
            </a>
            <a href="#" style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              backgroundColor: 'transparent',
              color: 'var(--text-primary)',
              border: '1px solid var(--text-primary)',
              fontWeight: 500,
              borderRadius: '4px',
              transition: 'all 0.2s ease',
              textDecoration: 'none'
            }} onMouseOver={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.backgroundColor = 'var(--text-primary)'; e.target.style.color = 'var(--bg-primary)'; }} onMouseOut={e => { e.target.style.transform = 'translateY(0)'; e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'var(--text-primary)'; }}>
              View CV
            </a>
          </div>
        </div>
        <div className="hero-image-container" style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
          <img
            src="/hero-image.png"
            alt="James Harold Roble"
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              borderRadius: '50%',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              border: '8px solid var(--bg-secondary)',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
