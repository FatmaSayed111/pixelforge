import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" style={{
      padding: '160px 0 80px',
      textAlign: 'center',
      backgroundColor: '#162033',
      backgroundImage: 'linear-gradient(135deg, #162033 0%, #1e2a42 100%)'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          marginBottom: '1.5rem',
          color: '#ffffff',
          fontWeight: '700',
          lineHeight: '1.2'
        }}>We Build Digital Experiences That Drive Results</h1>
        
        <p style={{
          fontSize: '1.3rem',
          marginBottom: '2.5rem',
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: '1.6'
        }}>From concept to launch, we are your dedicated partners in crafting exceptional software solutions that captivate users and accelerate growth.</p>
        
        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          marginBottom: '60px',
          flexWrap: 'wrap'
        }}>
          <button onClick={() => scrollToSection('work')} style={{
            padding: '15px 40px',
            backgroundColor: '#2fbb8b',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '1.1rem',
            transition: 'all 0.3s',
            cursor: 'pointer'
          }}>View Our Work</button>
          
          <button onClick={() => scrollToSection('contact')} style={{
            padding: '15px 40px',
            backgroundColor: 'transparent',
            color: '#2fbb8b',
            border: '2px solid #2fbb8b',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '1.1rem',
            transition: 'all 0.3s',
            cursor: 'pointer'
          }}>Get a Quote</button>
        </div>
        
        <div>
          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '30px',
            fontSize: '1.1rem'
          }}>Trusted by innovative companies worldwide</p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap'
          }}>
            {['Google', 'Microsoft', 'Amazon', 'Apple', 'Facebook'].map((logo, index) => (
              <div key={index} style={{
                width: '120px',
                height: '60px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255, 255, 255, 0.7)',
                fontWeight: '600',
                backdropFilter: 'blur(10px)'
              }}>{logo}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;