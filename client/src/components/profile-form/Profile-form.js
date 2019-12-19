import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectProfileData, selectFieldErrors } from '../../selectors/profile';
import { selectCurrentUser } from '../../selectors/user';
import { createProfileStart } from '../../actions/profile';

import './profile-form.scss';

import FormInput from '../form-input/Form-input';
import CustomButton from '../custom-button/Custom-button';

const ProfileForm = ({
  history,
  profile,
  user,
  createProfileStart,
  field_errors
}) => {
  const address = profile
    ? profile.address
    : {
        name: '',
        email: '',
        street_nr: '',
        postal_code: '',
        city: '',
        country: ''
      };

  const [profileDetails, setProfileDetails] = useState({
    name: '',
    email: '',
    street_nr: '',
    postal_code: '',
    city: '',
    country: ''
  });

  useEffect(() => {
    setProfileDetails({
      name: user.name,
      email: user.email,
      street_nr: address.street_nr,
      postal_code: address.postal_code,
      city: address.city,
      country: address.country
    });
  }, [
    user,
    address.street_nr,
    address.postal_code,
    address.city,
    address.country
  ]);

  const { name, email, street_nr, postal_code, city, country } = profileDetails;

  const handleSubmit = async event => {
    event.preventDefault();

    createProfileStart(profileDetails, history);
  };

  const handleChange = async event => {
    const { name, value } = event.target;

    setProfileDetails({ ...profileDetails, [name]: value });
  };

  return (
    <div className='profile'>
      <h2 className='title'>My details</h2>
      <span>Please provide your details so we can deliver your order.</span>

      <form className='profile-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
          label='Name'
          error={
            !field_errors
              ? null
              : field_errors.find(obj => obj.param === 'name')
              ? field_errors.find(obj => obj.param === 'name').msg
              : null
          }
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          error={
            !field_errors
              ? null
              : field_errors.find(obj => obj.param === 'email')
              ? field_errors.find(obj => obj.param === 'email').msg
              : null
          }
          required
        />
        <FormInput
          type='text'
          name='street_nr'
          value={street_nr}
          onChange={handleChange}
          label='Street & number'
          error={
            !field_errors
              ? null
              : field_errors.find(obj => obj.param === 'street_nr')
              ? field_errors.find(obj => obj.param === 'street_nr').msg
              : null
          }
        />
        <FormInput
          type='text'
          name='postal_code'
          value={postal_code}
          onChange={handleChange}
          label='Postal code'
          error={
            !field_errors
              ? null
              : field_errors.find(obj => obj.param === 'postal_code')
              ? field_errors.find(obj => obj.param === 'postal_code').msg
              : null
          }
        />
        <FormInput
          type='text'
          name='city'
          value={city}
          onChange={handleChange}
          label='City'
          error={
            !field_errors
              ? null
              : field_errors.find(obj => obj.param === 'city')
              ? field_errors.find(obj => obj.param === 'city').msg
              : null
          }
        />
        <FormInput
          type='text'
          name='country'
          value={country}
          onChange={handleChange}
          label='Country'
          error={
            !field_errors
              ? null
              : field_errors.find(obj => obj.param === 'country')
              ? field_errors.find(obj => obj.param === 'country').msg
              : null
          }
        />
        <CustomButton type='submit'>Update details</CustomButton>
      </form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  profile: selectProfileData,
  user: selectCurrentUser,
  field_errors: selectFieldErrors
});

export default connect(mapStateToProps, { createProfileStart })(ProfileForm);
