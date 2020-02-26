import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getOrdersStart } from '../../actions/order';
import { selectOrders, selectOrdersLoading } from '../../selectors/orders';

import './orders.scss';
import OrderItem from '../../components/order-item/Order-item';

const Orders = ({ getOrdersStart, orders, isLoading }) => {
  useEffect(() => {
    getOrdersStart();
  }, [getOrdersStart]);

  const revOrders = orders ? orders.slice(0) : [];

  return (
    <div className='order-page'>
      <h1>Order history</h1>
      <div className='order-header'>
        <div className='date'>
          <span>Order date</span>
        </div>
        <div className='name'>
          <span>Items ordered</span>
        </div>
        <div className='quantity'>
          <span>Total quantity</span>
        </div>
        <div className='price'>
          <span>Total price</span>
        </div>
      </div>
      {!isLoading
        ? orders.length
          ? revOrders
              .reverse()
              .map(order => <OrderItem key={order._id} order={order} />)
          : 'Loading orders...'
        : 'Loading orders...'}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  orders: selectOrders,
  isLoading: selectOrdersLoading
});

export default connect(mapStateToProps, { getOrdersStart })(Orders);
