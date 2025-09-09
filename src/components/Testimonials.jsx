import React from 'react';

const Testimonials = () => {
  return (
    <section style={{
      padding: '100px 0',
      backgroundColor: '#162033',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <blockquote style={{
          fontSize: '1.8rem',
          fontStyle: 'italic',
          color: '#ffffff',
          marginBottom: '30px',
          lineHeight: '1.6',
          fontWeight: '500'
        }}>
          "PixelForge didn't just build us an app; they engineered a core part of our business. Their understanding of the FinTech landscape was invaluable."
        </blockquote>
        
        <div style={{
          marginTop: '30px'
        }}>
          <p style={{
            fontWeight: 'bold',
            color: '#2fbb8b',
            fontSize: '1.3rem',
            marginBottom: '5px'
          }}>Jane Doe</p>
          
          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '1.1rem'
          }}>CEO of NextGen Bank</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;