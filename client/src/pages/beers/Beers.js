import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { getProductsStart } from '../../actions/beers';

import WithSpinner from '../../components/with-spinner/With-spinner';

import BeersOverview from '../../components/beers-overview/Beers-overview';
import EbcCategory from '../ebc-category/EbcCategory';

import './beers.scss';

const BeersOverviewWithSpinner = WithSpinner(BeersOverview);
const EbcCategoryWithSpinner = WithSpinner(EbcCategory);

const Beers = ({ match, getProductsStart, loading }) => {
  useEffect(() => {
    getProductsStart();
  }, [getProductsStart]);
  return (
    <div className='beers-page'>
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <BeersOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:categoryId`}
        render={props => (
          <EbcCategoryWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.beers.loading
});

export default connect(
  mapStateToProps,
  { getProductsStart }
)(Beers);
