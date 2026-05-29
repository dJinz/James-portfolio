import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="container" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="fade-in" style={{ width: '100%', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--text-primary)' }}>Contact Form</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
          Please contact me directly at <span style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>jamespvper123@gmail.com</span> or drop your info here.
        </p>

        <form action="https://formsubmit.co/jamespvper123@gmail.com" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Prevent redirect to formsubmit captcha page if desired, but by default it redirects. We will let it redirect for simplicity. */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 calc(50% - 0.75rem)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="name" style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>Full name</label>
              <input type="text" id="name" name="name" required placeholder="Your Name" style={{
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                outline: 'none',
                width: '100%',
                fontSize: '1rem'
              }} />
            </div>
            <div style={{ flex: '1 1 calc(50% - 0.75rem)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="email" style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>Email Address</label>
              <input type="email" id="email" name="email" required placeholder="you@example.com" style={{
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                outline: 'none',
                width: '100%',
                fontSize: '1rem'
              }} />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="message" style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>Your Message</label>
            <textarea id="message" name="message" required rows="6" placeholder="Tell me about your project," style={{
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-secondary)',
              color: 'var(--text-primary)',
              outline: 'none',
              width: '100%',
              resize: 'vertical',
              fontSize: '1rem'
            }}></textarea>
          </div>



          <button type="submit" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: '1rem',
            backgroundColor: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-color)',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            marginTop: '0.5rem'
          }} onMouseOver={e => { e.currentTarget.style.backgroundColor = 'var(--text-primary)'; e.currentTarget.style.color = 'var(--bg-primary)'; }} onMouseOut={e => { e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'; e.currentTarget.style.color = 'var(--text-primary)'; }}>
            Send <Send size={20} />
          </button>
        </form>

        <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', textAlign: 'center' }}>
            Click the details below to contact me through other platforms:
          </p>
          <ul style={{
            listStyleType: 'disc',
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '1.2rem',
            paddingLeft: '1.5rem',
            margin: '0 auto',
            textAlign: 'left'
          }}>
            <li style={{ color: 'var(--text-secondary)' }}>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jamespvper123@gmail.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <Mail size={20} style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '1.05rem', fontWeight: 500 }}>James Roble</span>
              </a>
            </li>
            <li style={{ color: 'var(--text-secondary)' }}>
              <a href="https://www.linkedin.com/in/james-harold-roble-51783b40a/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <FaLinkedin size={20} style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '1.05rem', fontWeight: 500 }}>James Harold Roble</span>
              </a>
            </li>
            <li style={{ color: 'var(--text-secondary)' }}>
              <a href="https://github.com/dJinz" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <FaGithub size={20} style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '1.05rem', fontWeight: 500 }}>dJinz</span>
              </a>
            </li>
          </ul>
        </div>

        <p style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          © 2026 - Roble JH. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
