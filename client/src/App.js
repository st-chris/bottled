import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
// Styles
import './App.css';
// Components
import Header from './components/header/Header';
import Spinner from './components/spinner/Spinner';

const Home = lazy(() => import('./pages/home/Home'));
const Beers = lazy(() => import('./pages/beers/Beers'));
const Auth = lazy(() => import('./pages/auth/Auth'));
const Checkout = lazy(() => import('./pages/checkout/Checkout'));
const Contact = lazy(() => import('./pages/contact/Contact'));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <PersistGate persistor={persistor}>
          <div>
            <Header />
            <Switch>
              <Suspense fallback={<Spinner />}>
                <Route exact path='/' component={Home} />
                <Route path='/beers' component={Beers} />
                <Route exact path='/auth' component={Auth} />
                <Route exact path='/checkout' component={Checkout} />
                <Route exact path='/contact' component={Contact} />
              </Suspense>
            </Switch>
          </div>
        </PersistGate>
      </Router>
    </Provider>
  );
};

export default App;
