import React, { useState } from 'react';
import './register.css';
import logo from './logo.png';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    class: '',
    branch: '',
    password: '',
    confirmPassword: '',
    rollNo: '',
    addressLine1: '',
    addressLine2: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new FormData object to include the file
    const formDataWithFile = new FormData();

    // Append all form data to the FormData object
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'photo') {
        // Append the file separately
        formDataWithFile.append(key, value, value.name);
      } else {
        formDataWithFile.append(key, value);
      }
    });

    console.log(formDataWithFile);
  };

  return (
    <div className="registration-form">
      <div className="left-panel">
        <img src={logo} alt="School Logo" className="school-logo" />
        <h2>ABC International School</h2>
        <div className="photo-upload">
          <input type="file" name="photo" onChange={handleFileChange} />
        </div>
      </div>
      <div className="right-panel">
        <h3>Details Required for creating Student Account:</h3>
        <form onSubmit={handleSubmit}>
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />

          <label>Select Class:</label>
          <input type="text" name="class" value={formData.class} onChange={handleChange} />

          <label>Select Branch:</label>
          <input type="text" name="branch" value={formData.branch} onChange={handleChange} />

          <label>Set Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />

          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />

          <label>Roll No.:</label>
          <input type="text" name="rollNo" value={formData.rollNo} onChange={handleChange} />

          <label>Address Line1:</label>
          <input type="text" name="addressLine1" value={formData.addressLine1} onChange={handleChange} />

          <label>Address Line2:</label>
          <input type="text" name="addressLine2" value={formData.addressLine2} onChange={handleChange} />

          <button type="submit">Sign-In</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;