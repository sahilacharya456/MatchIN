import React, { useState } from 'react';
import './PostJob.css';

const PostJob = () => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    description: '',
    location: '',
    salary: '',
  });

  const handleChange = (e) => {
    setJobDetails({ ...jobDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert('Job Posted Successfully!');
    console.log('Job Details:', jobDetails);
  };

  return (
    <div className="post-job-container">
      <h2>Post a Job</h2>
      <form>
        <label>Job Title:</label>
        <input type="text" name="title" value={jobDetails.title} onChange={handleChange} />
        <label>Description:</label>
        <textarea name="description" value={jobDetails.description} onChange={handleChange}></textarea>
        <label>Location:</label>
        <input type="text" name="location" value={jobDetails.location} onChange={handleChange} />
        <label>Salary:</label>
        <input type="text" name="salary" value={jobDetails.salary} onChange={handleChange} />
        <button type="button" onClick={handleSubmit}>Post Job</button>
      </form>
    </div>
  );
};

export default PostJob;
