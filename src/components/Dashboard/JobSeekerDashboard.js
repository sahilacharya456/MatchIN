

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './JobSeekerDashboard.css';

const JobSeekerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="jobseeker-dashboard">
      <h1>Job Seeker Dashboard</h1>
      <div className="jobseeker-content">
 
        <button onClick={() => navigate('/jobseeker/search-jobs')}>Search for Jobs</button>

        <button onClick={() => navigate('/jobseeker/applications')}>View Applications</button>

        <button onClick={() => navigate('/jobseeker/saved-jobs')}>Saved Jobs</button>

        <button onClick={() => navigate('/jobseeker/update-profile')}>Update Profile</button>
      </div>
    </div>
  );
};

export default JobSeekerDashboard;
