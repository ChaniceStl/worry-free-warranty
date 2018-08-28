import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import {Home} from './components/home';

render(
    <Router history={browserHistory}>
      <Route path='/' component={Home}/>
    </Router>
, document.getElementById('root'));
