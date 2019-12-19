import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { getProfileStart } from '../../actions/profile';

import ErrorBoundary from '../../components/error-boundary/Error-boundary';
import Spinner from '../../components/spinner/Spinner';

import './account.scss';

const ProfileContainer = lazy(() =>
  import('../../components/profile/profile.container')
);
const ProfileFormContainer = lazy(() =>
  import('../../components/profile-form/profile-form.container')
);

const Account = ({ match, getProfileStart }) => {
  useEffect(() => {
    getProfileStart();
  }, [getProfileStart]);

  return (
    <div className='account'>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Route exact path={`${match.path}`} component={ProfileContainer} />
          <Route
            exact
            path={`${match.path}/edit`}
            component={ProfileFormContainer}
          />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default connect(
  null,
  { getProfileStart }
)(Account);
