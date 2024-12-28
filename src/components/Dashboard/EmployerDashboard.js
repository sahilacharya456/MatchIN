import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EmployerDashboard.css';

const EmployerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="employer-dashboard">
      <h1>Employer Dashboard</h1>
      <div className="employer-content">
        {/* Navigate to Post a Job page */}
        <button onClick={() => navigate('/employer/post-job')}>Post a Job</button>

        {}
        <button onClick={() => navigate('/employer/view-applications')}>View Applications</button>

        {}
        <button onClick={() => navigate('/employer/manage-jobs')}>Manage Job Listings</button>

        {}
        <button onClick={() => navigate('/employer/edit-profile')}>Edit Profile</button>
      </div>
    </div>
  );
};

export default EmployerDashboard;
