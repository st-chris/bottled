import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
//Components
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Beers from './pages/beers/Beers';
import Auth from './pages/auth/Auth';
import Checkout from './pages/checkout/Checkout';
import Contact from './pages/contact/Contact';

import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <PersistGate persistor={persistor}>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/beers' component={Beers} />
              <Route exact path='/auth' component={Auth} />
              <Route exact path='/checkout' component={Checkout} />
              <Route exact path='/contact' component={Contact} />
            </Switch>
          </div>
        </PersistGate>
      </Router>
    </Provider>
  );
};

export default App;
