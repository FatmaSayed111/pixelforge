import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would handle form submission
  };

  return (
    <section id="contact" style={{
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
        }}>Get in Touch</h2>
        
        <p style={{
          fontSize: '1.3rem',
          textAlign: 'center',
          marginBottom: '60px',
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: '1.6',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          We're here to answer your questions and help you get started on your next project. Let's create something incredible together.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'start'
        }}>
          {/* Contact Form */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: '40px',
            borderRadius: '12px',
            border: '1px solid #2a3a52',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              marginBottom: '30px',
              color: '#ffffff',
              textAlign: 'center'
            }}>Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  padding: '15px',
                  border: '1px solid #2a3a52',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff'
                }}
              />
              
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  padding: '15px',
                  border: '1px solid #2a3a52',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff'
                }}
              />
              
              <input
                type="text"
                name="company"
                placeholder="Company (Optional)"
                value={formData.company}
                onChange={handleChange}
                style={{
                  padding: '15px',
                  border: '1px solid #2a3a52',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff'
                }}
              />
              
              <textarea
                name="message"
                placeholder="Project Details"
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                  padding: '15px',
                  border: '1px solid #2a3a52',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  minHeight: '150px',
                  resize: 'vertical'
                }}
              ></textarea>
              
              <button type="submit" style={{
                padding: '15px 30px',
                backgroundColor: '#2fbb8b',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}>
                Submit
              </button>
            </form>
          </div>
          
          {/* Contact Info + Map */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px'
          }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '30px',
              borderRadius: '12px',
              border: '1px solid #2a3a52',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '20px',
                color: '#ffffff'
              }}>Contact Details</h3>
              
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.6',
                fontSize: '1.1rem',
                marginBottom: '10px'
              }}>contact@ICoreSoft.dev</p>
              
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.6',
                fontSize: '1.1rem'
              }}>(555) 123-4567</p>
            </div>
            
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '30px',
              borderRadius: '12px',
              border: '1px solid #2a3a52',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '20px',
                color: '#ffffff'
              }}>Our Office</h3>
              
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.6',
                fontSize: '1.1rem',
                marginBottom: '20px'
              }}>
                123 Innovation Drive<br />
                Suite 404, Tech City, 54321
              </p>

              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_LINK"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="office-map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
