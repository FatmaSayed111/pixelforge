import React from 'react';

const Work = () => {
  const projects = [
    {
      title: "NextGen Banking App",
      category: "FinTech"
    },
    {
      title: "ProjectFlow Analytics",
      category: "SaaS"
    },
    {
      title: "Tekebooth Connect",
      category: "Healthcare"
    },
    {
      title: "Cumfumi Cap Retrend",
      category: "E-commerce"
    },
    {
      title: "EcoRoute Planner",
      category: "Logistics"
    },
    {
      title: "HealthTrack Pro",
      category: "Healthcare"
    }
  ];

  return (
    <section id="work" style={{
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
        }}>Our Work</h2>
        
        <p style={{
          fontSize: '1.3rem',
          textAlign: 'center',
          marginBottom: '60px',
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: '1.6',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          We partner with visionary brands to create digital products that people love to use. Here are some of our success stories.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginBottom: '80px'
        }}>
          {projects.map((project, index) => (
            <div key={index} style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'transform 0.3s',
              border: '1px solid #2a3a52',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{
                height: '250px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255, 255, 255, 0.7)',
                fontWeight: '600'
              }}>
                Project Image
              </div>
              
              <div style={{ padding: '20px' }}>
                <h3 style={{
                  fontSize: '1.4rem',
                  marginBottom: '10px',
                  color: '#ffffff'
                }}>{project.title}</h3>
                
                <p style={{
                  color: '#2fbb8b',
                  fontWeight: '600'
                }}>{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          padding: '60px 40px',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid #2a3a52',
          backdropFilter: 'blur(10px)'
        }}>
          <h3 style={{
            fontSize: '2rem',
            marginBottom: '20px',
            color: '#ffffff'
          }}>Ready to start your project?</h3>
          
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '30px',
            lineHeight: '1.6'
          }}>
            Let's collaborate to create a digital experience that sets you apart.
          </p>
          
          <button onClick={() => {
            const element = document.getElementById('contact');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }} style={{
            padding: '15px 40px',
            backgroundColor: '#2fbb8b',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;