import React from 'react';

import './order-item.scss';

const OrderItem = ({ order }) => {
  const { items, orderDate, totalPrice, totalQuantity } = order;
  const date = new Date(orderDate);
  return (
    <div className='order-item'>
      <div className='date'>{date.toLocaleDateString()}</div>
      <span className='name'>
        {items.map(item => (
          <div key={item._id}>{item.name}</div>
        ))}
      </span>
      <span className='quantity'>
        <span className='value'>{totalQuantity}</span>
      </span>
      <span className='price'>
        {totalPrice.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}
      </span>
    </div>
  );
};

export default OrderItem;
