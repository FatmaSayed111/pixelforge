import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0f172a",
        color: "white",
        padding: "60px 0 30px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                marginBottom: "20px",
                color: "#2fbb8b",
              }}
            >
              ICoreSoft
            </h3>

            <p
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: "1.6",
                fontSize: "1.1rem",
              }}
            >
              Your partner in crafting cutting-edge digital solutions.
            </p>
          </div>

          <div>
            <h4
              style={{
                fontSize: "1.3rem",
                marginBottom: "20px",
                color: "#ffffff",
              }}
            >
              Company
            </h4>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["About", "Work", "Careers", "Insights"].map((item, index) => (
                <li key={index} style={{ marginBottom: "12px" }}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                      textDecoration: "none",
                      fontSize: "1.1rem",
                      transition: "color 0.3s",
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              style={{
                fontSize: "1.3rem",
                marginBottom: "20px",
                color: "#ffffff",
              }}
            >
              Services
            </h4>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Web Development",
                "Mobile Apps",
                "UI/UX Design",
                "Cloud Solutions",
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: "12px" }}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                      textDecoration: "none",
                      fontSize: "1.1rem",
                      transition: "color 0.3s",
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              style={{
                fontSize: "1.3rem",
                marginBottom: "20px",
                color: "#ffffff",
              }}
            >
              Connect
            </h4>

            <div style={{ display: "flex", gap: "15px" }}>
              <a
                href="mailto:example@email.com"
                style={{ color: "#2fbb8b", fontSize: "28px" }}
              >
                <MdEmail />
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#2fbb8b", fontSize: "28px" }}
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#2fbb8b", fontSize: "28px" }}
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #1e293b",
            paddingTop: "30px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: "1.1rem",
            }}
          >
            © 2025 ICoreSoft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
