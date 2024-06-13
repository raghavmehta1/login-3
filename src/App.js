import React, { useState } from 'react';
import './App.css';
import logo from './logo.png';
import backgroundImage from './background.jpeg';
import Login from './login';
import RegistrationForm from './register';
import { FaSchool, FaRegAddressBook, FaPhoneAlt } from "react-icons/fa";

function App() {
  const [view, setView] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLoginClick = () => {
    setView('login');
  };

  const handleRegisterClick = () => {
    setView('register');
  };

  return (
    <div className="app">
      {isLoggedIn ? (
        <>
          <nav className="navbar">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Instructors</a></li>
              <li><a href="#">Schedules</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <div className="auth-buttons">
              <button className="login" onClick={handleLoginClick}>Login</button>
              <button className="register" onClick={handleRegisterClick}>Register</button>
            </div>
          </nav>
          <div className="content">
            <div
              className="background-image"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            >
              <div className="overlay">
                <h1><FaSchool />
                  International School Bhopal
                </h1>
                <div className="container">
                  <div className="card">
                    <h2>
                      <FaRegAddressBook/> lorem ipsum Nagar<br/>
                      <FaPhoneAlt/> +91989278917
                    </h2>
                  </div>
                  <div className="container2">
                    <div className="card2">
                      <h2></h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="logo-overlay">
              <img src={logo} alt="School Logo" />
            </div>
          </div>
        </>
      ) : view === 'login' ? (
        <Login onLogin={handleLogin} onRegisterClick={handleRegisterClick} />
      ) : view === 'register' ? (
        <RegistrationForm onLoginClick={handleLoginClick} />
      ) : (
        <>
          <nav className="navbar">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Instructors</a></li>
              <li><a href="#">Schedules</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <div className="auth-buttons">
              <button className="login" onClick={handleLoginClick}>Login</button>
              <button className="register" onClick={handleRegisterClick}>Register</button>
            </div>
          </nav>
          <div className="content">
            <div
              className="background-image"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            > 
              <div className="overlay">
                <h1><FaSchool />
                  International School Bhopal
                </h1>
                <div className="container">
                  <div className="card">
                    <h2>
                      <FaRegAddressBook/> lorem ipsum <br/>
                      <FaPhoneAlt/> +91989278917
                      
                    </h2>
                  </div>
                  <div className="container2">
                    <div className="card2">
                      <h2></h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="logo-overlay">
              <img src={logo} alt="School Logo" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
