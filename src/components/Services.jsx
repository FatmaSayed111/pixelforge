import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Enterprise Software",
      description: "Custom software solutions to streamline your operations, enhance productivity, and drive growth at scale.",
      icon: "💼"
    },
    {
      title: "Customer-Facing Platforms",
      description: "Engaging web and mobile applications that deliver seamless user experiences and build lasting customer relationships.",
      icon: "📱"
    },
    {
      title: "Digital Transformation",
      description: "Modernizing legacy systems and integrating cutting-edge technology to future-proof your business.",
      icon: "🔄"
    }
  ];

  return (
    <section id="services" style={{
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
        }}>Our Solutions</h2>
        
        <p style={{
          fontSize: '1.3rem',
          textAlign: 'center',
          marginBottom: '60px',
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: '1.6',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          We provide comprehensive digital solutions designed to solve complex challenges and create measurable business value.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px'
        }}>
          {services.map((service, index) => (
            <div key={index} style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '40px 30px',
              borderRadius: '12px',
              border: '1px solid #2a3a52',
              textAlign: 'center',
              transition: 'transform 0.3s, border-color 0.3s',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '25px'
              }}>{service.icon}</div>
              
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '20px',
                color: '#ffffff'
              }}>{service.title}</h3>
              
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.6',
                fontSize: '1.1rem',
                marginBottom: '25px'
              }}>{service.description}</p>
              
              <a href="#learn-more" style={{
                color: '#2fbb8b',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                display: 'inline-block'
              }}>Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;