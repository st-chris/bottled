import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsProfileLoaded } from '../../selectors/profile';

import WithSpinner from '../with-spinner/With-spinner';
import ProfileForm from './Profile-form';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsProfileLoaded
});

const ProfileFormContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ProfileForm);

export default ProfileFormContainer;
