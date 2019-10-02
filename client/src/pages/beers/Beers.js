import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { getProductsStart } from '../../actions/beers';

import ErrorBoundary from '../../components/error-boundary/Error-boundary';
import Spinner from '../../components/spinner/Spinner';

import './beers.scss';

const BeersOverviewContainer = lazy(() =>
  import('../../components/beers-overview/beers-overview.container')
);
const EbcCategoryContainer = lazy(() =>
  import('../ebc-category/ebcCategory.container')
);

const Beers = ({ match, getProductsStart }) => {
  useEffect(() => {
    getProductsStart();
  }, [getProductsStart]);
  return (
    <div className='beers-page'>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Route
            exact
            path={`${match.path}`}
            component={BeersOverviewContainer}
          />
          <Route
            path={`${match.path}/:categoryId`}
            component={EbcCategoryContainer}
          />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default connect(
  null,
  { getProductsStart }
)(Beers);
