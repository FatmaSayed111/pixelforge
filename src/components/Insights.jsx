import React from 'react';
import insights1 from '../assets/images/insights1.png'
import insights2 from '../assets/images/insights2.png'
import insights3 from '../assets/images/insights3.png'
import insights4 from '../assets/images/insights4.png'


const Insights = () => {
  const articles = [
    {
      category: "Featured Article",
      title: "The Future of AI in Enterprise Software",
      description: "Discover how artificial intelligence is reshaping the landscape of enterprise solutions, from automating complex workflows to unlocking predictive insights that drive strategic decision-making.",
      author: "Maria Garcia",
      date: "October 26, 2023",
      featured: true,
      images: insights1
    },
    {
      category: "UI/UX Design",
      title: "10 Usability Heuristics for Modern Web Apps",
      author: "David Chen",
      date: "Oct 15, 2023",
      featured: true,
      images:insights2
    },
    {
      category: "Development",
      title: "Scaling Your Application with Serverless Architecture",
      author: "Sarah Lee",
      date: "Sep 28, 2023",
      featured: true,
      images:insights3
    },
    {
      category: "Business",
      title: "How to Calculate ROI for a Custom Software Project",
      author: "Alex Johnson",
      date: "Sep 10, 2023",
      featured: true,
      images:insights4
    }
  ];

  return (
    <section id="insights" style={{
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
        }}>Insights & Ideas</h2>
        
        <p style={{
          fontSize: '1.3rem',
          textAlign: 'center',
          marginBottom: '60px',
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: '1.6',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          Explore our latest articles, tutorials, and thoughts on technology, design, and business.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px'
        }}>
          {articles.map((article, index) => (
            <div key={index} style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '30px',
              borderRadius: '12px',
              border: '1px solid #2a3a52',
              transition: 'transform 0.3s',
              backdropFilter: 'blur(10px)',
              ...(article.featured && {
                gridColumn: '1 / -1',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '30px',
                alignItems: 'center'
              })
            }}>
              {article.featured && (
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  height: '250px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}>
                  <img 
                    src={article.images} 
                    alt={article.title} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }} 
                  />
                </div>
              )}
              
              <div>
                <div style={{
                  backgroundColor: article.featured ? '#2fbb8b' : 'transparent',
                  color: article.featured ? '#ffffff' : '#2fbb8b',
                  padding: article.featured ? '8px 15px' : '0',
                  borderRadius: article.featured ? '20px' : '0',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                  display: 'inline-block'
                }}>
                  {article.category}
                </div>
                
                <h3 style={{
                  fontSize: article.featured ? '1.8rem' : '1.4rem',
                  marginBottom: '15px',
                  color: '#ffffff',
                  lineHeight: '1.4'
                }}>{article.title}</h3>
                
                {article.description && (
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.6',
                    marginBottom: '20px'
                  }}>{article.description}</p>
                )}
                
                <p style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.9rem'
                }}>
                  By {article.author} • {article.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;