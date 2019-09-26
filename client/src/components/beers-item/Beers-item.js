import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/Custom-button';
import { addItem } from '../../actions/cart';

import './beers-item.scss';

const BeersItem = ({ item, addItem }) => {
  const { name, price, image_url } = item;
  return (
    <div className='beers-item'>
      <img className='image' src={image_url} alt={name} />
      <div className='beers-item-footer'>
        <span className='name'>{name}</span>
        <span className='price'>
          {price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          })}
        </span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default connect(
  null,
  { addItem }
)(BeersItem);
