import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#162033',
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
      padding: '1rem 0',
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          color: '#2fbb8b'
        }}>PixelForge</div>
        
        <nav style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <a href="#home" onClick={() => scrollToSection('home')} style={{
            textDecoration: 'none',
            color: '#ffffff',
            fontWeight: '500',
            fontSize: '1.1rem',
            transition: 'color 0.3s'
          }}>Home</a>
          <a href="#services" onClick={() => scrollToSection('services')} style={{
            textDecoration: 'none',
            color: '#ffffff',
            fontWeight: '500',
            fontSize: '1.1rem',
            transition: 'color 0.3s'
          }}>Services</a>
          <a href="#work" onClick={() => scrollToSection('work')} style={{
            textDecoration: 'none',
            color: '#ffffff',
            fontWeight: '500',
            fontSize: '1.1rem',
            transition: 'color 0.3s'
          }}>Work</a>
          <a href="#about" onClick={() => scrollToSection('about')} style={{
            textDecoration: 'none',
            color: '#ffffff',
            fontWeight: '500',
            fontSize: '1.1rem',
            transition: 'color 0.3s'
          }}>About</a>
          <a href="#contact" onClick={() => scrollToSection('contact')} style={{
            textDecoration: 'none',
            color: '#ffffff',
            fontWeight: '500',
            fontSize: '1.1rem',
            transition: 'color 0.3s'
          }}>Contact</a>
        </nav>
        
        <button style={{
          display: 'none',
          background: 'none',
          border: 'none',
          fontSize: '1.5rem',
          cursor: 'pointer',
          color: '#ffffff'
        }} onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
      </div>

      {isMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: '#162033',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
        }}>
          <a href="#home" onClick={() => scrollToSection('home')} style={{
            textDecoration: 'none',
            color: '#ffffff',
            fontWeight: '500'
          }}>Home</a>
          <a href="#services" onClick={() => scrollToSection('services')} style={{
            textDecoration: 'none',
            color: '#ffffff',
            fontWeight: '500'
          }}>Services</a>
          <a href="#work" onClick={() => scrollToSection('work')} style={{
            textDecoration: 'none',
            color: '#ffffff',
            fontWeight: '500'
          }}>Work</a>
          <a href="#about" onClick={() => scrollToSection('about')} style={{
            textDecoration: 'none',
            color: '#ffffff',
            fontWeight: '500'
          }}>About</a>
          <a href="#contact" onClick={() => scrollToSection('contact')} style={{
            textDecoration: 'none',
            color: '#ffffff',
            fontWeight: '500'
          }}>Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;