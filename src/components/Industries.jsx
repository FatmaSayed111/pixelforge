import React from 'react';

const Industries = () => {
  const industries = [
    {
      title: "FinTech",
      description: "Secure, scalable, and compliant financial technology solutions, from mobile banking to investment platforms."
    },
    {
      title: "SaaS",
      description: "Building robust, multi-tenant Software-as-a-Service products that are ready to scale from day one."
    },
    {
      title: "Healthcare",
      description: "HIPAA-compliant software, telehealth platforms, and patient management systems that improve care."
    },
    {
      title: "Education",
      description: "Innovative e-learning platforms and educational tools that make learning more accessible and engaging."
    },
    {
      title: "E-commerce & Retail",
      description: "High-performance online stores and retail solutions that boost sales and enhance customer experience."
    },
    {
      title: "Logistics",
      description: "Optimizing supply chains with custom software for tracking, management, and analytics."
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
          marginBottom: '60px',
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: '1.6',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          We combine deep industry knowledge with technical expertise to deliver solutions that address the unique challenges of your sector.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px'
        }}>
          {industries.map((industry, index) => (
            <div key={index} style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '30px',
              borderRadius: '12px',
              border: '1px solid #2a3a52',
              transition: 'transform 0.3s, border-color 0.3s',
              backdropFilter: 'blur(10px)'
            }}>
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