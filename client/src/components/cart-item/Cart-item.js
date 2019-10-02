import React from 'react';

import './cart-item.scss';

const CartItem = ({ item: { name, image_url, price, quantity } }) => (
  <div className='cart-item'>
    <img src={image_url} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default React.memo(CartItem);
