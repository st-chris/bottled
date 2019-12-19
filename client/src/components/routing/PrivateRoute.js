import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsAuthenticated, selectUserLoading } from '../../selectors/user';

const PrivateRoute = ({
  component: Component,
  isUserLoading,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated && !isUserLoading ? (
        <Redirect to='/auth' />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = createStructuredSelector({
  isUserLoading: selectUserLoading,
  isAuthenticated: selectIsAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute);
