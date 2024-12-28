import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './navbar.css';

const NavBar = ({ userRole, isLoggedIn }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/login'); 
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

 
  const isLoginPage = location.pathname === '/login';

  const renderEmployerLinks = () => (
    <>
      <Link to="/employer-dashboard">Employer Dashboard</Link>
      <Link to="/jobseeker-dashboard">View Applications</Link>
      <Link to="/create-job">Create Job</Link>
      <Link to="/view-jobs">View Posted Jobs</Link>
    </>
  );

  const renderJobSeekerLinks = () => (
    <>
      <Link to="/jobseeker-dashboard">Job Seeker Dashboard</Link>
      <Link to="/search-jobs">Search Jobs</Link>
      <Link to="/saved-jobs">Saved Jobs</Link>
      <Link to="/job-applications">My Applications</Link>
    </>
  );

  if (isLoginPage) {
    return null; 
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          MatchIN
        </Link>
        <button className="navbar-toggle" onClick={toggleMobileMenu}>
          ☰
        </button>
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {isLoggedIn ? (
            <>
              {userRole === 'Employer' && renderEmployerLinks()}
              {userRole === 'JobSeeker' && renderJobSeekerLinks()}
              <Link to="/profile">Profile</Link>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
