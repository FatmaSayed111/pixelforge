// src/components/Solutions.jsx
import React from 'react';
import service1 from '../assets/images/service1.png';
import service2 from '../assets/images/service2.png';
import service3 from '../assets/images/service3.png';

const Solutions = () => {
  const solutions = [
    {
      title: "Enterprise Software",
      description:
        "Custom software solutions to streamline your operations, enhance productivity, and drive growth at scale.",
      images: service1,
    },
    {
      title: "Customer-Facing Platforms",
      description:
        "Engaging web and mobile applications that deliver seamless user experiences and build lasting customer relationships.",
      images: service2,
    },
    {
      title: "Digital Transformation",
      description:
        "Modernizing legacy systems and integrating cutting-edge technology to future-proof your business.",
      images: service3,
    },
  ];

  return (
    <section
      id="services"
      style={{
        padding: '100px 0',
        backgroundColor: '#162033',
      }}
    >
      {/* Inline CSS block to keep this component self-contained.
          You can move these rules to a separate CSS file if you prefer. */}
      <style>{`
        .solutions-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
        }

        .solution-card {
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          height: 350px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.4);
          cursor: pointer;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          background-color: rgba(255,255,255,0.02);
        }

        .solution-card:focus,
        .solution-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.55);
        }

        .solution-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: blur(2px) brightness(0.7);
          transform: scale(1.05);
          transition: filter 0.45s ease, transform 0.45s ease;
          display: block;
        }

        /* Hover effect: image becomes clearer and slightly zoomed */
        .solution-card:hover .solution-image,
        .solution-card:focus .solution-image {
          filter: blur(0px) brightness(0.9);
          transform: scale(1.08);
        }

        .solution-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 22px;
          background: linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0));
          color: #ffffff;
        }

        .solution-title {
          font-size: 1.4rem;
          margin: 0 0 8px 0;
          font-weight: 700;
        }

        .solution-desc {
          font-size: 1rem;
          line-height: 1.5;
          margin: 0 0 12px 0;
          color: rgba(255,255,255,0.92);
        }

        .solution-link {
          color: #2fbb8b;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.98rem;
        }

        /* Responsive tweaks */
        @media (max-width: 720px) {
          .solution-card {
            height: 300px;
          }
          .solution-title {
            font-size: 1.2rem;
          }
        }
      `}</style>

      <div className="solutions-container">
        <h2
          style={{
            fontSize: '2.8rem',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#ffffff',
          }}
        >
          Our Solutions
        </h2>

        <p
          style={{
            fontSize: '1.3rem',
            textAlign: 'center',
            marginBottom: '80px', // أبعدنا الكلام عن بداية الصور
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.6',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          We provide comprehensive digital solutions designed to solve complex challenges and create measurable business value.
        </p>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <article
              key={index}
              className="solution-card"
              aria-labelledby={`solution-title-${index}`}
            >
              {/* Background image (blurred) */}
              <img
                src={solution.images}
                alt={solution.title}
                className="solution-image"
                loading="lazy"
                draggable="false"
              />

              {/* Overlayed text at bottom */}
              <div className="solution-overlay">
                <h3 id={`solution-title-${index}`} className="solution-title">
                  {solution.title}
                </h3>

                <p className="solution-desc">{solution.description}</p>

                <a className="solution-link" href="#learn-more">
                  Learn More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
