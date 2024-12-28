import React from 'react';
import './ViewApplications.css';

const ViewApplications = () => {
  const applications = [
    { id: 1, name: 'John Doe', position: 'Software Engineer', status: 'Under Review' },
    { id: 2, name: 'Jane Smith', position: 'Data Analyst', status: 'Shortlisted' },
  ];

  return (
    <div className="view-applications-container">
      <h2>View Applications</h2>
      <ul>
        {applications.map((app) => (
          <li key={app.id}>
            <strong>{app.name}</strong> applied for <strong>{app.position}</strong> - {app.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewApplications;
