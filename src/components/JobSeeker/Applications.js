import React, { useState } from 'react';
import './Applications.css';

const Applications = () => {
  const [applications] = useState([
    { id: 1, jobTitle: 'Software Engineer', status: 'Under Review' },
    { id: 2, jobTitle: 'Data Analyst', status: 'Interview Scheduled' },
  ]);

  return (
    <div className="applications-container">
      <h2>View Applications</h2>
      {applications.length > 0 ? (
        <ul className="applications-list">
          {applications.map(app => (
            <li key={app.id} className="application-item">
              <strong>{app.jobTitle}</strong> - Status: {app.status}
            </li>
          ))}
        </ul>
      ) : (
        <p>No applications found.</p>
      )}
    </div>
  );
};

export default Applications;
