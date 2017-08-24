import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';

const routes = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={App} />
        </BrowserRouter>
    )
}

export default routes;