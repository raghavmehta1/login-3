import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import './register.css';
import logo from './logo.png';
import placeholderImage from './bg3.jpeg';

const RegistrationForm = ({ onLoginClick }) => {
  const initialUser = {
    fullName: '',
    class: '',
    branch: '',
    password: '',
    confirmPassword: '',
    rollNo: '',
    addressLine1: '',
    addressLine2: '',
    photo: null,
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    class: Yup.string().required('Class is required'),
    branch: Yup.string().required('Branch is required'),
    password: Yup.string().required('Password is required')
      .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/, 'Password must be at least 6 characters long, contain at least one letter, one number, and one special character'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    rollNo: Yup.string().required('Roll No. is required'),
    addressLine1: Yup.string(),
    addressLine2: Yup.string(),
  });

  const handleFileChange = (index, file, setFieldValue) => {
    setFieldValue(`users[${index}].photo`, file);
  };

  const handleSubmit = (values) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const usersData = values.users.map(user => ({
      fullName: user.fullName,
      class: user.class,
      branch: user.branch,
      password: user.password,
      rollNo: user.rollNo,
      addressLine1: user.addressLine1,
      addressLine2: user.addressLine2,
      photo: user.photo,
    }));

    const allUsers = [...existingUsers, ...usersData];
    localStorage.setItem('users', JSON.stringify(allUsers));
    alert("Registration successful! Please login.");
    onLoginClick();
  };

  return (
    <div className="registration-form">
      <div className="left-panel">
        <img src={logo} alt="School Logo" className="school-logo" />
        <h2>ABC International School</h2>
      </div>
      <div className="right-panel">
        <h3>Details Required for creating Student Account:</h3>
        <Formik
          initialValues={{ users: [initialUser] }}
          validationSchema={Yup.object().shape({
            users: Yup.array().of(validationSchema)
          })}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <FieldArray name="users">
                {({ push, remove }) => (
                  <>
                    {values.users.map((user, index) => (
                      <div key={index} className="user-form">
                        <div className="photo-upload">
                          <div className="photo-placeholder">
                            {user.photo ? (
                              <img src={URL.createObjectURL(user.photo)} alt="Uploaded Photo" />
                            ) : (
                              <img src={placeholderImage} alt="Placeholder" />
                            )}
                          </div>
                          <input type="file" name={`users[${index}].photo`} onChange={(e) => handleFileChange(index, e.target.files[0], setFieldValue)} />
                        </div>

                        <label>Full Name:</label>
                        <Field type="text" name={`users[${index}].fullName`} />
                        <ErrorMessage name={`users[${index}].fullName`} component="div" className="error" />

                        <label>Select Class:</label>
                        <Field type="text" name={`users[${index}].class`} />
                        <ErrorMessage name={`users[${index}].class`} component="div" className="error" />

                        <label>Select Branch:</label>
                        <Field type="text" name={`users[${index}].branch`} />
                        <ErrorMessage name={`users[${index}].branch`} component="div" className="error" />
<br/>
                        <label>Set Password:</label>
                        <Field type="password" name={`users[${index}].password`} />
                        <ErrorMessage name={`users[${index}].password`} component="div" className="error" />

                        <label>Confirm Password:</label>
                        <Field type="password" name={`users[${index}].confirmPassword`} />
                        <ErrorMessage name={`users[${index}].confirmPassword`} component="div" className="error" />

                        <label>Roll No.:</label>
                        <Field type="text" name={`users[${index}].rollNo`} />
                        <ErrorMessage name={`users[${index}].rollNo`} component="div" className="error" />
<br/>
                        <label>Address Line1:</label>
                        <Field type="text" name={`users[${index}].addressLine1`} />

                        <label>Address Line2:</label>
                        <Field type="text" name={`users[${index}].addressLine2`} />

                      </div>
                    ))}
                  </>
                )}
              </FieldArray>
              <button type="submit">Signup</button>
            </Form>
          )}
        </Formik>
        <button className="login-redirect" onClick={onLoginClick}>
          Already have an account? Login
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
