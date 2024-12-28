import React, { useState } from 'react';
import './SavedJobs.css';

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState([
    { id: 1, title: 'UX Designer', company: 'Design Studio' },
    { id: 2, title: 'Frontend Developer', company: 'WebWorks' },
  ]);

  const removeJob = id => {
    setSavedJobs(savedJobs.filter(job => job.id !== id));
  };

  return (
    <div className="saved-jobs-container">
      <h2 className="saved-jobs-title">Saved Jobs</h2>
      {savedJobs.length > 0 ? (
        <ul className="saved-jobs-list">
          {savedJobs.map(job => (
            <li key={job.id} className="saved-job-item">
              <span>
                <strong>{job.title}</strong> at {job.company}
              </span>
              <button
                className="remove-job-button"
                onClick={() => removeJob(job.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-saved-jobs">No saved jobs.</p>
      )}
    </div>
  );
};

export default SavedJobs;
