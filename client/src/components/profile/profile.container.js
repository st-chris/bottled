import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsProfileLoaded } from '../../selectors/profile';

import WithSpinner from '../with-spinner/With-spinner';
import Profile from './Profile';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsProfileLoaded
});

const ProfileContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Profile);

export default ProfileContainer;
