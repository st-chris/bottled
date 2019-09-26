import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerStart } from '../../actions/auth';

import './register.scss';

import FormInput from '../form-input/Form-input';
import CustomButton from '../custom-button/Custom-button';

const Register = ({ registerStart }) => {
  const [registerDetails, setRegisterDetails] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = registerDetails;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== password2) {
      alert("passwords don't match");
      return;
    }
    registerStart({ name, email, password });
  };

  const handleChange = async event => {
    const { name, value } = event.target;

    setRegisterDetails({ ...registerDetails, [name]: value });
  };

  return (
    <div className='register'>
      <h2 className='title'>Register</h2>
      <span>Register with your email and password.</span>

      <form className='register-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
          label='Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='password2'
          value={password2}
          onChange={handleChange}
          label='Confirm password'
          required
        />
        <CustomButton type='submit'>Register</CustomButton>
      </form>
    </div>
  );
};

export default connect(
  null,
  { registerStart }
)(Register);
