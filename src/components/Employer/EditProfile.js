import React, { useState } from 'react';
import './EditProfile.css';

const EditProfile = () => {
  const [profile, setProfile] = useState({
    companyName: '',
    contactEmail: '',
    website: '',
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert('Profile Updated Successfully!');
    console.log('Updated Profile:', profile);
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <form>
        <label>Company Name:</label>
        <input type="text" name="companyName" value={profile.companyName} onChange={handleChange} />
        <label>Contact Email:</label>
        <input type="email" name="contactEmail" value={profile.contactEmail} onChange={handleChange} />
        <label>Website:</label>
        <input type="text" name="website" value={profile.website} onChange={handleChange} />
        <button type="button" onClick={handleSubmit}>Update Profile</button>
      </form>
    </div>
  );
};

export default EditProfile;
