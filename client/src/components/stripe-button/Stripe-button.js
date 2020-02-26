import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { paymentStart } from '../../actions/payment';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../selectors/user';

const StripeCheckoutButton = ({ history, price, paymentStart, user }) => {
  const priceForStripe = Math.round(price * 100);
  const publishableKey = 'pk_test_alu0YacnnfF7AKBKLXM7VbZh00FuKoCNbl';

  const onToken = token => {
    paymentStart(priceForStripe, token, history);
  };

  return (
    <StripeCheckout
      label='Pay now'
      name='bottled.'
      email={user ? user.email : ''}
      image={'https://svgshare.com/i/FA9.svg'}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
});

export default connect(mapStateToProps, { paymentStart })(StripeCheckoutButton);
