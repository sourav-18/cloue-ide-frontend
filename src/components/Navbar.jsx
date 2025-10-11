import React, { useState, useEffect } from 'react';
import "./css/Navbar.css"
import { Link } from 'react-router';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <a href="/" className="logo" onClick={closeMobileMenu}>
            <i className="fas fa-code"></i>
            CloudIDE
          </a>
          
          <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#features" onClick={closeMobileMenu}>Features</a></li>
            <li><a href="#languages" onClick={closeMobileMenu}>Languages</a></li>
            <li><Link to="/dashboard" onClick={closeMobileMenu}>Dashboard</Link></li>
          </ul>
          
          <div className={`nav-actions ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <Link to="/auth" className="btn btn-primary" onClick={closeMobileMenu}>
              Sign In
            </Link>
            {/* <a href="/signup" className="btn btn-primary" onClick={closeMobileMenu}>
              Get Started
            </a> */}
          </div>
          
          <button 
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;