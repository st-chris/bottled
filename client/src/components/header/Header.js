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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser, faFileAlt } from '@fortawesome/free-solid-svg-icons';

import './header.scss';

const Header = ({ currentUser, hidden, logoutStart, userLoadedStart }) => {
  useEffect(() => {
    userLoadedStart();
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
          <div className='loggedIn'>
            <Link className='item' to='/account'>
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <Link className='item' to='/orders'>
              <FontAwesomeIcon icon={faFileAlt} />
            </Link>
            <a onClick={logoutStart} href='#!' className='item'>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </a>
          </div>
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

export default connect(mapStateToProps, { logoutStart, userLoadedStart })(
  Header
);
