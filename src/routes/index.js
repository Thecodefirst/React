import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AllComponents from './componentsList';

const { 
    Login,
    Index 
}  = AllComponents;

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/index" component={Index} />
        </Switch>
    </BrowserRouter>
)

export default routes;

