import React from 'react';

import Login from '../../components/auth/Login';
import Register from '../../components/auth/Register';

import './auth.scss';

const Auth = () => (
  <div className='register-login'>
    <Login />
    <Register />
  </div>
);

export default Auth;
