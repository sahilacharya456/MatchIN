import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleViewUsers = () => {
    navigate('/admin/view-users');
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="admin-content">
        <button onClick={handleViewUsers}>View All Users</button>
        <button onClick={() => alert('Manage Job Listings')}>Manage Job Listings</button>
        <button onClick={() => alert('Site Statistics')}>View Site Statistics</button>
        <button onClick={() => alert('Settings')}>Settings</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
