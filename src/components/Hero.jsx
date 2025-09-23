import React from 'react';
import { FaSpotify } from "react-icons/fa";
import { SiSlack, SiNetflix, SiAirbnb } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const logos = [
    { id: "spotify", Icon: FaSpotify, label: "Spotify" },
    { id: "slack", Icon: SiSlack, label: "Slack" },
    { id: "netflix", Icon: SiNetflix, label: "Netflix" },
    { id: "google", Icon: FcGoogle, label: "Google" },
    { id: "airbnb", Icon: SiAirbnb, label: "Airbnb" },
  ];

  return (
    <section id="home" style={{
      padding: '160px 0 80px',
      textAlign: 'center',
      backgroundColor: '#162033',
      backgroundImage: 'linear-gradient(135deg, #162033 0%, #1e2a42 100%)',
      position: 'relative'
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
        }}
        >We Build Digital Experiences That 
        <span className="shimmer-text"> Drive Results</span>
         </h1>
        
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
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
            {logos.map(({ id, Icon, label }) => (
              <div key={id} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Icon style={{
                  fontSize: '2.5rem',
                  color: '#ffffff'
                }} />
                <span style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
