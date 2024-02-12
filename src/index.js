// @flow

import React    from 'react';
import ReactDOM from 'react-dom';

// components
import App from './components/app';
import NotFound from './components/not-found';

// router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

//font-awesome css
import './assets/fontawesome-pro-5.0.0/web-fonts-with-css/css/fontawesome-all.min.css';

// custom css
import './index.css';


const Root = (): BrowserRouter => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={ props => <App { ...props } maxMessages={ 20 } /> }/>
                    <Route component={ NotFound }/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(
    <Root />,
    document.querySelector('#root')
);
