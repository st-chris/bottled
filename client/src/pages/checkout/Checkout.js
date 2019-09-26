import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../selectors/cart';

import CheckoutItem from '../../components/checkout-item/Checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/Stripe-button';

import './checkout.scss';

const Checkout = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='image'>
        <span>#</span>
      </div>
      <div className='name'>
        <span>Name</span>
      </div>
      <div className='quantity'>
        <span>Quantity</span>
      </div>
      <div className='price'>
        <span>Price</span>
      </div>
      <div className='remove'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(item => (
      <CheckoutItem key={item._id} cartItem={item} />
    ))}
    <div className='total'>
      <span>
        Total:{' '}
        {total.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}
      </span>
      <StripeCheckoutButton price={total} />
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
