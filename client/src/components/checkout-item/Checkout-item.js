import React from 'react';
import { connect } from 'react-redux';

import { removeItem, decrItemAmount, addItem } from '../../actions/cart';

import './checkout-item.scss';

const CheckoutItem = ({ cartItem, removeItem, decrItemAmount, addItem }) => {
  const { name, image_url, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={image_url} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => decrItemAmount(cartItem)}>
          <span role='img' aria-label='Decrease quantity'>
            &#10134;
          </span>
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          <span role='img' aria-label='Increase quantity'>
            &#10133;
          </span>
        </div>
      </span>
      <span className='price'>
        {price.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}
      </span>
      <div className='remove-button' onClick={() => removeItem(cartItem)}>
        <span role='img' aria-label='Remove item'>
          &#10005;
        </span>
      </div>
    </div>
  );
};

export default connect(
  null,
  { addItem, decrItemAmount, removeItem }
)(CheckoutItem);
