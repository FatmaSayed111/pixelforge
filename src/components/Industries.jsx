import React from 'react';

import  industries1 from '../assets/images/logo industries1.png';
import  industries2 from '../assets/images/logo industries2.png';
import  industries3 from '../assets/images/logo industries3.png';
import  industries4 from '../assets/images/logo industries4.png';
import  industries5 from '../assets/images/logo industries5.png';
import  industries6 from '../assets/images/logo industries6.png';

const Industries = () => {
  const industries = [
    {
      title: "FinTech",
      description: "Secure, scalable, and compliant financial technology solutions, from mobile banking to investment platforms.",
      image: industries1
    },
    {
      title: "SaaS",
      description: "Building robust, multi-tenant Software-as-a-Service products that are ready to scale from day one.",
      image: industries2
    },
    {
      title: "Healthcare",
      description: "HIPAA-compliant software, telehealth platforms, and patient management systems that improve care.",
      image: industries3
    },
    {
      title: "Education",
      description: "Innovative e-learning platforms and educational tools that make learning more accessible and engaging.",
      image: industries4
    },
    {
      title: "E-commerce & Retail",
      description: "High-performance online stores and retail solutions that boost sales and enhance customer experience.",
      image: industries5
    },
    {
      title: "Logistics",
      description: "Optimizing supply chains with custom software for tracking, management, and analytics.",
      image: industries6
    }
  ];

  return (
    <section id="industries" style={{
      padding: '100px 0',
      backgroundColor: '#162033'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <h2 style={{
          fontSize: '2.8rem',
          textAlign: 'center',
          marginBottom: '20px',
          color: '#ffffff'
        }}>Industry Expertise</h2>
        
        <p style={{
          fontSize: '1.3rem',
          textAlign: 'center',
          marginBottom: '80px',
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: '1.6',
          maxWidth: '800px',
          margin: '0 auto 80px'
        }}>
          We combine deep industry knowledge with technical expertise 
          to deliver solutions that address the unique challenges
           of your sector.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px'
        }}>
          {industries.map((industry, index) => (
            <div 
              key={index} 
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                padding: '30px',
                borderRadius: '12px',
                border: '1px solid #2a3a52',
                backdropFilter: 'blur(10px)',
                textAlign: 'center',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = '#2fbb8b';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#2a3a52';
              }}
            >
              <img 
                src={industry.image} 
                alt={industry.title} 
                style={{
                  width: '60px',
                  height: '60px',
                  objectFit: 'contain',
                  marginBottom: '20px'
                }} 
              />
              <h3 style={{
                fontSize: '1.4rem',
                marginBottom: '15px',
                color: '#ffffff'
              }}>{industry.title}</h3>
              
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.6',
                fontSize: '1.1rem'
              }}>{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
