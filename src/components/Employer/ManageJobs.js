import React from 'react';
import './ManageJobs.css';

const ManageJobs = () => {
  const jobs = [
    { id: 1, title: 'Frontend Developer', applicants: 10 },
    { id: 2, title: 'Backend Developer', applicants: 5 },
  ];

  const deleteJob = (id) => {
    alert(`Job with ID ${id} deleted.`);
  };

  return (
    <div className="manage-jobs-container">
      <h2>Manage Job Listings</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <strong>{job.title}</strong> - {job.applicants} applicants
            <button onClick={() => deleteJob(job.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageJobs;
