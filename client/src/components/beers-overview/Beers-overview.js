import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectBeersForPreview } from '../../selectors/beers';

import BeersPreview from '../beers-preview/Beers-preview';

import './beers-overview.scss';

const BeersOverview = ({ beers }) => {
  return (
    <div className='beers-overview'>
      {beers.map(({ _id, ...otherCategoryProps }) => (
        <BeersPreview key={_id} {...otherCategoryProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  beers: selectBeersForPreview
});

export default connect(mapStateToProps)(BeersOverview);
