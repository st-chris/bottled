import React from 'react';
import { withRouter } from 'react-router-dom';

import BeersItem from '../beers-item/Beers-item';

import './beers-preview.scss';

const BeersPreview = ({ title, items, history, match, routeName }) => {
  return (
    <div className='beers-preview'>
      <h1
        className='title'
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </h1>
      <div className='preview'>
        {items
          .filter((beer, index) => index < 4)
          .map(item => (
            <BeersItem key={item._id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(BeersPreview);
