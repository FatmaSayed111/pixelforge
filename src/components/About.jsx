import React from 'react';

import leader1 from '../assets/images/leader1.png';
import leader2 from '../assets/images/leader2.png';
import leader3 from '../assets/images/leader3.png';
import leader4 from '../assets/images/leader4.png';

import about1 from '../assets/images/logo about1.png';
import about2 from '../assets/images/logo about2.png';
import about3 from '../assets/images/logo about3.png';

const About = () => {
  const values = [
    {
      icon: about1,
      title: "Innovation",
      description: "We continuously explore new technologies and ideas to create cutting-edge solutions."
    },
    {
      icon: about2,
      title: "Collaboration",
      description: "We work as an extension of your team to achieve shared goals and create exceptional results."
    },
    {
      icon: about3,
      title: "Integrity",
      description: "We build trust through transparency, honesty, and delivering on our promises."
    }
  ];

  const team = [
    {
      name: "Alex Johnson",
      position: "CEO & Founder",
      year: "New Zealand Product 2020",
      images: leader1
    },
    {
      name: "Maria Garcia",
      position: "Chief Technology Officer",
      images: leader2
    },
    {
      name: "David Chen",
      position: "Head of Design",
      images: leader3
    },
    {
      name: "Sarah Lee",
      position: "VP of Engineering",
      images: leader4
    }
  ];

  return (
    <section id="about" style={{ padding: '100px 0', backgroundColor: '#162033' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Main Intro */}
        <h2 style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '30px', color: '#ffffff' }}>
          We are Innovators, Creators, and Problem Solvers
        </h2>
        
        <p style={{
          fontSize: '1.3rem',
          textAlign: 'center',
          marginBottom: '100px', // ✅ بعدنا أكتر
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: '1.6',
          maxWidth: '800px',
          margin: '0 auto 100px auto'
        }}>
          Our team is dedicated to empowering businesses with transformative technology. 
          Our work reflects our passion for excellence and our commitment to building lasting partnerships.
        </p>
        
        {/* Core Values */}
        <div style={{ marginBottom: '100px' }}>
          <h3 style={{ fontSize: '2.2rem', textAlign: 'center', marginBottom: '30px', color: '#ffffff' }}>
            Our Core Values
          </h3>
          
          <p style={{
            fontSize: '1.2rem',
            textAlign: 'center',
            marginBottom: '80px', // ✅ بعدنا عن الكروت
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 80px auto'
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
                <img 
                  src={value.icon} 
                  alt={value.title} 
                  style={{ width: '60px', marginBottom: '20px' }}
                />
                <h4 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#ffffff' }}>
                  {value.title}
                </h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div style={{ marginBottom: '100px' }}>
          <h3 style={{ fontSize: '2.2rem', textAlign: 'center', marginBottom: '30px', color: '#ffffff' }}>
            Meet Our Leadership
          </h3>
          
          <p style={{
            fontSize: '1.2rem',
            textAlign: 'center',
            marginBottom: '80px',
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 80px auto'
          }}>
            The experienced minds guiding our vision and driving our clients' success.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {team.map((member, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <img
                  src={member.images}
                  alt={member.name}
                  style={{
                    width: '140px',
                    height: '140px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '20px'
                  }}
                />
                <h4 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#ffffff' }}>
                  {member.name}
                </h4>
                <p style={{ color: '#2fbb8b', fontWeight: '600', marginBottom: '5px' }}>
                  {member.position}
                </p>
                {member.year && (
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                    {member.year}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          padding: '60px 40px',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid #2a3a52',
          backdropFilter: 'blur(10px)'
        }}>
          <h3 style={{ fontSize: '2.2rem', marginBottom: '20px', color: '#ffffff' }}>
            Join Our Team
          </h3>
          
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
