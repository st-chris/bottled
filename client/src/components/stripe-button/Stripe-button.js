import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { paymentStart } from '../../actions/payment';

const StripeCheckoutButton = ({ price, paymentStart }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_alu0YacnnfF7AKBKLXM7VbZh00FuKoCNbl';

  const onToken = token => {
    paymentStart(priceForStripe, token);
  };

  return (
    <StripeCheckout
      label='Pay now'
      name='bottled.'
      image={'https://svgshare.com/i/FA9.svg'}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default connect(
  null,
  { paymentStart }
)(StripeCheckoutButton);
