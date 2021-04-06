import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma'
});

export default () => {
    return (
        <div>
            <BrowserRouter>
                <StylesProvider generateClassName={generateClassName}>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing}/>
                        <Route path="/" component={Landing}/>
                    </Switch>
                </StylesProvider>
            </BrowserRouter>
        </div>
    )
}