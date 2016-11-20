/* @flow */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import { App } from './containers/App';
import { HomeContainer } from './containers/Home';
import { CounterContainer } from './containers/Counter';
import { LoginContainer } from './containers/Login';

/* components */
import {requireAuthentication} from './components/AuthenticatedComponent';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomeContainer} />
        <Route path="counter" component={requireAuthentication(CounterContainer)} />
        <Route path="login" component={LoginContainer} />
        <Route status={404} path="*" component={HomeContainer} />
    </Route>
);