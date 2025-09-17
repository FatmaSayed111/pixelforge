import React from 'react';
import work1 from '../assets/images/work1.png'
import work2 from '../assets/images/work2.png'
import work3 from '../assets/images/work3.png'
import work4 from '../assets/images/work4.png'
import work5 from '../assets/images/work5.png'
import work6 from '../assets/images/work6.png'

const Work = () => {
  const projects = [
    {
      title: "NextGen Banking App",
      category: "FinTech",
      images: work1
    },
    {
      title: "ProjectFlow Analytics",
      category: "SaaS",
      images: work2
    },
    {
      title: "Tekebooth Connect",
      category: "Healthcare",
      images: work3
    },
    {
      title: "Cumfumi Cap Retrend",
      category: "E-commerce",
      images: work4
    },
    {
      title: "EcoRoute Planner",
      category: "Logistics",
      images: work5
    },
    {
      title: "HealthTrack Pro",
      category: "Healthcare",
      images: work6
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
               <img 
                src={project.images} 
                alt={project.title} 
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover'
                }} 
              />
             
              
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