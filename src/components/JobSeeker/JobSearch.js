import React, { useState } from 'react';
import './JobSearch.css';

const JobSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {

    const mockJobs = [
      { id: 1, title: 'Software Engineer', company: 'Tech Corp' },
      { id: 2, title: 'Data Analyst', company: 'DataWorks' },
      { id: 3, title: 'Project Manager', company: 'BuildIt' },
    ];

    const filteredJobs = mockJobs.filter(job =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filteredJobs);
  };

  return (
    <div className="job-search-container">
      <h2>Search for Jobs</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter job title"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      {results.length > 0 ? (
        <ul className="job-list">
          {results.map(job => (
            <li key={job.id} className="job-item">
              <strong>{job.title}</strong> at {job.company}
            </li>
          ))}
        </ul>
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  );
};

export default JobSearch;
