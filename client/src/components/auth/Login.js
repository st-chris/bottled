import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginStart } from '../../actions/auth';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../selectors/user';

import FormInput from '../form-input/Form-input';
import CustomButton from '../custom-button/Custom-button';

import './login.scss';

const Login = ({ loginStart, currentUser }) => {
  const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });

  const { email, password } = loginDetails;

  const handleSubmit = async event => {
    event.preventDefault();

    loginStart(email, password);
    setLoginDetails({ email: '', password: '' });
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setLoginDetails({ ...loginDetails, [name]: value });
  };

  if (currentUser) {
    return <Redirect to='/account' />;
  }
  return (
    <div className='login'>
      <h2>Login</h2>
      <span>Sign in with your email and password.</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='Password'
          required
        />
        <CustomButton type='submit'>Login</CustomButton>
      </form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(
  mapStateToProps,
  { loginStart }
)(Login);
