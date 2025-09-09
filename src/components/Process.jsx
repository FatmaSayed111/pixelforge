import React from 'react';

const Process = () => {
  const steps = [
    {
      number: "1",
      title: "Discover",
      description: "We dive deep into your goals, challenges, and user needs."
    },
    {
      number: "2",
      title: "Design",
      description: "We create intuitive wireframes, prototypes, and visual designs."
    },
    {
      number: "3",
      title: "Develop",
      description: "Our expert engineers build and test your product with precision."
    },
    {
      number: "4",
      title: "Deploy",
      description: "We ensure a smooth launch and provide ongoing support."
    }
  ];

  return (
    <section id="process" style={{
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
        }}>Our Proven Process</h2>
        
        <p style={{
          fontSize: '1.3rem',
          textAlign: 'center',
          marginBottom: '60px',
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: '1.6',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          We follow a structured, agile methodology to ensure transparency, efficiency, and successful outcomes for every project.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px'
        }}>
          {steps.map((step, index) => (
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
                width: '60px',
                height: '60px',
                backgroundColor: '#2fbb8b',
                color: '#ffffff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
                margin: '0 auto 25px'
              }}>
                {step.number}
              </div>
              
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#ffffff'
              }}>{step.title}</h3>
              
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.6'
              }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;