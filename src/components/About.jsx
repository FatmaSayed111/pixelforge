import React from 'react';

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "We continuously explore new technologies and ideas to create cutting-edge solutions."
    },
    {
      title: "Collaboration",
      description: "We work as an extension of your team to achieve shared goals and create exceptional results."
    },
    {
      title: "Integrity",
      description: "We build trust through transparency, honesty, and delivering on our promises."
    }
  ];

  const team = [
    {
      name: "Alex Johnson",
      position: "CEO & Founder",
      year: "New Zealand Product 2020"
    },
    {
      name: "Maria Garcia",
      position: "Chief Technology Officer"
    },
    {
      name: "David Chen",
      position: "Head of Design"
    },
    {
      name: "Sarah Lee",
      position: "VP of Engineering"
    }
  ];

  return (
    <section id="about" style={{
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
        }}>We are Innovators, Creators, and Problem Solvers</h2>
        
        <p style={{
          fontSize: '1.3rem',
          textAlign: 'center',
          marginBottom: '80px',
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: '1.6',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          Our team is dedicated to empowering businesses with transformative technology. Our work reflects our passion for excellence and our commitment to building lasting partnerships.
        </p>
        
        <div style={{ marginBottom: '100px' }}>
          <h3 style={{
            fontSize: '2.2rem',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#ffffff'
          }}>Our Core Values</h3>
          
          <p style={{
            fontSize: '1.2rem',
            textAlign: 'center',
            marginBottom: '60px',
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            These principles guide our business, our partnerships, and our culture.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            {values.map((value, index) => (
              <div key={index} style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                padding: '40px 30px',
                borderRadius: '12px',
                border: '1px solid #2a3a52',
                textAlign: 'center',
                backdropFilter: 'blur(10px)'
              }}>
                <h4 style={{
                  fontSize: '1.5rem',
                  marginBottom: '20px',
                  color: '#2fbb8b'
                }}>{value.title}</h4>
                
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6'
                }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '100px' }}>
          <h3 style={{
            fontSize: '2.2rem',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#ffffff'
          }}>Meet Our Leadership</h3>
          
          <p style={{
            fontSize: '1.2rem',
            textAlign: 'center',
            marginBottom: '60px',
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            The experienced minds guiding our vision and driving our clients' success.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {team.map((member, index) => (
              <div key={index} style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                padding: '30px',
                borderRadius: '12px',
                border: '1px solid #2a3a52',
                textAlign: 'center',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.9rem'
                }}>
                  Photo
                </div>
                
                <h4 style={{
                  fontSize: '1.3rem',
                  marginBottom: '10px',
                  color: '#ffffff'
                }}>{member.name}</h4>
                
                <p style={{
                  color: '#2fbb8b',
                  fontWeight: '600',
                  marginBottom: '5px'
                }}>{member.position}</p>
                
                {member.year && (
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.9rem'
                  }}>{member.year}</p>
                )}
              </div>
            ))}
          </div>
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
            fontSize: '2.2rem',
            marginBottom: '20px',
            color: '#ffffff'
          }}>Join Our Team</h3>
          
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '30px',
            lineHeight: '1.6'
          }}>
            We're always looking for talented individuals to join our mission. Explore our career opportunities and help us build the future of digital innovation.
          </p>
          
          <button style={{
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
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;