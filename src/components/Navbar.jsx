import React, { useState, useEffect } from 'react';
import "./css/Navbar.css"
import { Link } from 'react-router';
import { AllState } from '../context/Context';
import constantData from '../utils/constant.utils';

const Navbar = () => {
  const { state: { userProfile }, dispatch } = AllState();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    const result = confirm("Are you sure to Logout");
    if (result) {
      dispatch({ type: constantData.reducerActionType.notification, payload: { notification: { message: 'Successfully logout', type: 'success' } } });
      localStorage.removeItem("token");
      dispatch({ type: constantData.reducerActionType.token, payload: { token: null } });
    }
  }

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
            {userProfile ? <Link to="/" className="btn btn-primary" onClick={handleLogout}>
              Log Out
            </Link> :
              <Link to="/auth" className="btn btn-primary" onClick={closeMobileMenu}>
                Log In
              </Link>}
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