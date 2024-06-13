import React, { useState } from 'react';
import './login.css';
import backgroundImage from './background.jpeg';
import icon from './logo.png';
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import logo from './logo.png';

const Login = ({ onLogin, onRegisterClick }) => {
  const [loginData, setLoginData] = useState({
    rollNo: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.rollNo === loginData.rollNo && user.password === loginData.password);

    if (user) {
      alert("Login successful!");
      onLogin();
    } else {
      alert("Invalid roll number or password!");
    }
  };

  return (
    <div className="appp">
      <div className="left-side">
        <h1>School Login Page For International School Bhopal <IoMdSchool /></h1>
        <div className="logoo-overlay">
          <img src={logo} alt="School Logo" />
        </div>
      </div>
      <div className="right-side" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="login-box">
          <h2>LOGIN</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>User-ID:</label>
              <MdOutlineAccountCircle />
              <input
                type="text"
                name="rollNo"
                value={loginData.rollNo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label>Password:</label>
              <MdOutlinePassword />
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="submit-group">
              <img src={icon} alt="User Icon" className="user-icon" />
              <button className="submit" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
