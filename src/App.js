import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; 
import NavBar from './components/NavBar/NavBar';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import EmployerDashboard from './components/Dashboard/EmployerDashboard';
import JobSeekerDashboard from './components/Dashboard/JobSeekerDashboard';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import ViewUsers from './components/Admin/ViewUsers';
import JobSearch from './components/JobSeeker/JobSearch';
import Applications from './components/JobSeeker/Applications';
import SavedJobs from './components/JobSeeker/SavedJobs';
import UpdateProfile from './components/JobSeeker/UpdateProfile';
import PostJob from './components/Employer/PostJob';
import ViewApplications from './components/Employer/ViewApplications';
import ManageJobs from './components/Employer/ManageJobs';
import EditProfile from './components/Employer/EditProfile';

const App = () => {
  const [userRole, setUserRole] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      try {
        const decodedToken = jwtDecode(token); 
        setUserRole(decodedToken.role);
      } catch (err) {
        console.error('Invalid token:', err);
        localStorage.removeItem('token'); 
        setIsLoggedIn(false);
      }
    }
  }, []);

  const handleLogin = (role) => {
    setUserRole(role);
    setIsLoggedIn(true);
  };

  return (
    <Router>
      {isLoggedIn && <NavBar userRole={userRole} isLoggedIn={isLoggedIn} />}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              userRole === 'Admin' ? (
                <AdminDashboard />
              ) : userRole === 'Employer' ? (
                <EmployerDashboard />
              ) : (
                <JobSeekerDashboard />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        {}
        <Route path="/jobseeker/search-jobs" element={isLoggedIn ? <JobSearch /> : <Navigate to="/login" />} />
        <Route
          path="/jobseeker/applications"
          element={isLoggedIn ? <Applications /> : <Navigate to="/login" />}
        />
        <Route path="/jobseeker/saved-jobs" element={isLoggedIn ? <SavedJobs /> : <Navigate to="/login" />} />
        <Route
          path="/jobseeker/update-profile"
          element={isLoggedIn ? <UpdateProfile /> : <Navigate to="/login" />}
        />
        {}
        <Route
          path="/admin/view-users"
          element={
            isLoggedIn && userRole === 'Admin' ? <ViewUsers /> : <Navigate to="/login" />
          }
        />
        <Route path="*" element={<Navigate to={isLoggedIn ? '/dashboard' : '/login'} />} />

        {}
        <Route
          path="/employer/post-job"
          element={isLoggedIn && userRole === 'Employer' ? <PostJob /> : <Navigate to="/login" />}
        />
        <Route
          path="/employer/view-applications"
          element={isLoggedIn && userRole === 'Employer' ? <ViewApplications /> : <Navigate to="/login" />}
        />
        <Route
          path="/employer/manage-jobs"
          element={isLoggedIn && userRole === 'Employer' ? <ManageJobs /> : <Navigate to="/login" />}
        />
        <Route
          path="/employer/edit-profile"
          element={isLoggedIn && userRole === 'Employer' ? <EditProfile /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
