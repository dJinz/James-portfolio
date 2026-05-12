import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="container" style={{ minHeight: '60vh', justifyContent: 'center' }}>
      <div className="fade-in" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Contact Me</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem' }}>
          I'm currently available for freelance work and new opportunities. If you have a project in mind, need some front-end magic, or just want to chat, I'd absolutely love to work with you!
        </p>
        
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jamespvper123@gmail.com" target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.8rem',
          padding: '1rem 2rem',
          backgroundColor: 'transparent',
          color: 'var(--text-primary)',
          border: '1px solid var(--text-primary)',
          fontWeight: 500,
          borderRadius: '4px',
          fontSize: '1.1rem',
          transition: 'all 0.3s ease',
          marginBottom: '3rem'
        }} onMouseOver={e => { e.target.style.backgroundColor = 'var(--text-primary)'; e.target.style.color = 'var(--bg-primary)'; }} onMouseOut={e => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'var(--text-primary)'; }}>
          <Mail size={20} />
          Say Hello
        </a>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '3rem',
          color: 'var(--text-secondary)',
          fontSize: '1.05rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <Phone size={20} style={{ color: 'var(--text-primary)' }} />
            <span>09665375692</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <MapPin size={20} style={{ color: 'var(--text-primary)' }} />
            <span>Philippines Davao Davao City</span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jamespvper123@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onMouseOver={e => e.currentTarget.style.color='var(--text-primary)'} onMouseOut={e => e.currentTarget.style.color='var(--text-secondary)'}>
            <Mail size={24} />
          </a>
          <a href="#" aria-label="LinkedIn" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onMouseOver={e => e.currentTarget.style.color='var(--text-primary)'} onMouseOut={e => e.currentTarget.style.color='var(--text-secondary)'}>
            <FaLinkedin size={24} />
          </a>
          <a href="#" aria-label="GitHub" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onMouseOver={e => e.currentTarget.style.color='var(--text-primary)'} onMouseOut={e => e.currentTarget.style.color='var(--text-secondary)'}>
            <FaGithub size={24} />
          </a>
        </div>
        
        <p style={{ marginTop: '4rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Roble JH. Built with minimal aesthetics.
        </p>
      </div>
    </section>
  );
};

export default Contact;
