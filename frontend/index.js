import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import promise from 'redux-promise'
import injectTapEventPlugin from 'react-tap-event-plugin';

import Signup from './components/signup'
import Login from './components/login'
import App from './components/app';
import reducers from './reducers';
// import './style/style.css';

injectTapEventPlugin()


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(promise))(createStore);


render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path='/' component={App}/>
      <Route path='login' component={Login}/>
    </Router>
  </Provider>
, document.getElementById('root'));
