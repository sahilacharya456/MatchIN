import React, { useState } from 'react';
import './UpdateProfile.css';

const UpdateProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    skills: '',
  });

  const handleChange = e => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert('Profile updated successfully!');
    console.log('Updated Profile:', profile);
  };

  return (
    <div className="update-profile-container">
      <h2>Update Profile</h2>
      <form>
        <div>
          {}
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder='name'
          />
        </div>
        <div>
          {}
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder='email'
          />
        </div>
        <div>
          {}
          <textarea
            name="skills"
            value={profile.skills}
            onChange={handleChange}
            placeholder='skills'
          ></textarea>
        </div>
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
