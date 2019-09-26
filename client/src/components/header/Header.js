import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutStart, userLoadedStart } from '../../actions/auth';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../selectors/cart';
import { selectCurrentUser } from '../../selectors/user';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../cart-icon/Cart-icon';
import CartDropdown from '../cart-dropdown/Cart-dropdown';

import './header.scss';

const Header = ({ currentUser, hidden, logoutStart, userLoadedStart }) => {
  useEffect(() => {
    if (localStorage.token) {
      userLoadedStart();
    }
  }, [userLoadedStart]);

  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <div className='logo-title'>bottled.</div>
        <Logo className='logo' />
      </Link>
      <div className='menu-items'>
        <Link className='item' to='/beers'>
          BEERS
        </Link>
        <Link className='item' to='/contact'>
          CONTACT
        </Link>
        {currentUser ? (
          <a onClick={logoutStart} href='#!' className='item'>
            SIGN OUT
          </a>
        ) : (
          <Link className='item' to='/auth'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(
  mapStateToProps,
  { logoutStart, userLoadedStart }
)(Header);
