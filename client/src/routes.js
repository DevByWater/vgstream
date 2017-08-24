import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import HomeContainer from './components/home/HomeContainer';

const routes = () => {
    return (
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path="/" component={HomeContainer} />
                </Switch>
            </App>
        </BrowserRouter>
    )
}

export default routes;