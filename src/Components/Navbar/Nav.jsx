import "./Nav.scss";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/education", label: "Education" },
  ];

  return (
    <header className="navbar glass-panel">
      <div className="nav-container">
        
        <h2 className="logo glow-text">SRIDEVI K</h2>

        {/* HAMBURGER */}
        <div 
          className={`menu-toggle ${menuOpen ? "open" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* NAV LINKS */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setMenuOpen(false)} // close on click
              className={location.pathname === link.path ? "nav-link active" : "nav-link"}
            >
              {link.label}
            </Link>
          ))}
          
          <Link 
            to="/contact" 
            className="btn-primary contact-btn"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Nav;