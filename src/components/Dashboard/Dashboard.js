import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="rainbow-heading">Welcome to MatchIN</h1>
      <h2 className="consistent-heading">Welcome to MatchIN</h2>
      <div className="dashboard-buttons">
        <button className="dashboard-button">Explore Features</button>
        <button className="dashboard-button">Settings</button>
        <button
          className="dashboard-button"
          onClick={() => alert('Logout Successful')}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
