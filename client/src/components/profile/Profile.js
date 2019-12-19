import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentProfile } from '../../selectors/profile';
import { selectCurrentUser } from '../../selectors/user';

import './profile.scss';

const Profile = ({ profile, user }) => {
  if (profile.length) {
    const { street_nr, postal_code, city, country } = profile[0];
    const { name } = user;
    const dob = new Date(profile[4]);
    return (
      <div className='profile'>
        <div>
          <h2>Details of {name}</h2>
        </div>
        <div>Street: {street_nr}</div>
        <div>Postal code: {postal_code}</div>
        <div>City: {city}</div>
        <div>Country: {country}</div>
        <div>Date of birth: {dob.toLocaleDateString()}</div>
        <div>
          <Link to='/account/edit'>Edit details</Link>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        You don't have a profile yet, please{' '}
        <Link to='/account/edit'>click here</Link> to create one.
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  profile: selectCurrentProfile,
  user: selectCurrentUser
});

export default connect(mapStateToProps)(Profile);
