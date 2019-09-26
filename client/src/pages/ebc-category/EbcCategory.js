import React from 'react';
import { connect } from 'react-redux';
import { selectCategoryBeer } from '../../selectors/beers';

import BeersItem from '../../components/beers-item/Beers-item';

import './ebcCategory.scss';

const EbcCategory = ({ beers }) => {
  const { title, items } = beers;

  return (
    <div className='collection-page'>
      <h2>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <BeersItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  beers: selectCategoryBeer(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(EbcCategory);
