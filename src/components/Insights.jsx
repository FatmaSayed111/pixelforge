import React from 'react';
import insights1 from '../assets/images/insights1.png';
import insights2 from '../assets/images/insights2.png';
import insights3 from '../assets/images/insights3.png';
import insights4 from '../assets/images/insights4.png';

const Insights = () => {
  const articles = [
    {
      category: "Featured Article",
      title: "The Future of AI in Enterprise Software",
      description:
        "Discover how artificial intelligence is reshaping the landscape of enterprise solutions, from automating complex workflows to unlocking predictive insights that drive strategic decision-making.",
      author: "Maria Garcia",
      date: "October 26, 2023",
      featured: true,
      images: insights1,
    },
    {
      category: "UI/UX Design",
      title: "10 Usability Heuristics for Modern Web Apps",
      author: "David Chen",
      date: "Oct 15, 2023",
      featured: false,
      images: insights2,
    },
    {
      category: "Development",
      title: "Scaling Your Application with Serverless Architecture",
      author: "Sarah Lee",
      date: "Sep 28, 2023",
      featured: false,
      images: insights3,
    },
    {
      category: "Business",
      title: "How to Calculate ROI for a Custom Software Project",
      author: "Alex Johnson",
      date: "Sep 10, 2023",
      featured: false,
      images: insights4,
    },
  ];

  return (
    <section
      id="insights"
      style={{
        padding: "100px 0",
        backgroundColor: "#162033",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            fontSize: "2.8rem",
            textAlign: "center",
            marginBottom: "20px",
            color: "#ffffff",
          }}
        >
          Insights & Ideas
        </h2>

        <p
          style={{
            fontSize: "1.3rem",
            textAlign: "center",
            marginBottom: "80px",
            color: "rgba(255, 255, 255, 0.8)",
            lineHeight: "1.6",
            maxWidth: "800px",
            margin: "0 auto 80px auto",
          }}
        >
          Explore our latest articles, tutorials, and thoughts on technology,
          design, and business.
        </p>

        {/* Featured Article */}
        {articles[0] && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "30px",
              marginBottom: "80px",
            }}
          >
            <img
              src={articles[0].images}
              alt={articles[0].title}
              style={{
                width: "45%",
                borderRadius: "12px",
              }}
            />
            <div style={{ flex: 1 }}>
              <p
                style={{
                  color: "#2fbb8b",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                {articles[0].category}
              </p>
              <h3
                style={{
                  fontSize: "1.8rem",
                  marginBottom: "15px",
                  color: "#ffffff",
                }}
              >
                {articles[0].title}
              </h3>
              {articles[0].description && (
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    marginBottom: "15px",
                    lineHeight: "1.6",
                  }}
                >
                  {articles[0].description}
                </p>
              )}
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.6)",
                  fontSize: "0.9rem",
                }}
              >
                By {articles[0].author} • {articles[0].date}
              </p>
            </div>
          </div>
        )}

        {/* Other 3 articles side by side */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "30px",
          }}
        >
          {articles.slice(1).map((article, index) => (
            <div key={index}>
              <img
                src={article.images}
                alt={article.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "15px",
                }}
              />
              <p
                style={{
                  color: "#2fbb8b",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                {article.category}
              </p>
              <h3
                style={{
                  fontSize: "1.2rem",
                  marginBottom: "10px",
                  color: "#ffffff",
                }}
              >
                {article.title}
              </h3>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.6)",
                  fontSize: "0.9rem",
                }}
              >
                By {article.author} • {article.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
