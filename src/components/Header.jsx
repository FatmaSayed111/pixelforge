import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const linkStyle = {
    textDecoration: "none",
    color: "#ffffff",
    fontWeight: "500",
    fontSize: "1.1rem",
    transition: "color 0.3s",
    paddingBottom: "5px",
  };

  const activeStyle = {
    borderBottom: "2px solid #2fbb8b",
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "#162033",
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        padding: "1rem 0",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* اللوجو */}
        <h1 className="logo-shimmer">ICoreSoft</h1>

        {/* النافبار */}
        <nav
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? { ...linkStyle, ...activeStyle } : linkStyle
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/solutions"
            style={({ isActive }) =>
              isActive ? { ...linkStyle, ...activeStyle } : linkStyle
            }
          >
            Solutions
          </NavLink>
          <NavLink
            to="/work"
            style={({ isActive }) =>
              isActive ? { ...linkStyle, ...activeStyle } : linkStyle
            }
          >
            Work
          </NavLink>
          <NavLink
            to="/industries"
            style={({ isActive }) =>
              isActive ? { ...linkStyle, ...activeStyle } : linkStyle
            }
          >
            Industries
          </NavLink>
          <NavLink
            to="/insights"
            style={({ isActive }) =>
              isActive ? { ...linkStyle, ...activeStyle } : linkStyle
            }
          >
            Insights
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) =>
              isActive ? { ...linkStyle, ...activeStyle } : linkStyle
            }
          >
            About
          </NavLink>
        </nav>

        {/* زرار Contact Us */}
        <NavLink
          to="/contact"
          style={{
            backgroundColor: "#2fbb8b", 
            color: "#fff",
            fontWeight: "500",
            textDecoration: "none",
            transition: "background 0.3s",
            ...(location.pathname === "/contact"
              ? { boxShadow: "0 0 0 2px #fff inset" } 
              : {}),
          }}
        >
          Contact Us
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
