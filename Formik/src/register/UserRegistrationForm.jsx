import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Must be 6 characters or more')
    .required('Required'),
});

const UserRegistrationForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: values => {
      console.log("Registered User:", values);
      
      setTimeout(() => {
        navigate('/login');
      }, 500); 
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>User Registration</h2>

      <div>
        <label>Username</label>
        <input
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.errors.username && formik.touched.username && (
          <div style={{ color: 'red' }}>{formik.errors.username}</div>
        )}
      </div>

      <div>
        <label>Email Address</label>
        <input
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        )}
      </div>

      <div>
        <label>Password</label>
        <input
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password && (
          <div style={{ color: 'red' }}>{formik.errors.password}</div>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserRegistrationForm;
