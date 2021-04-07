import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Header from './components/Header';
import Progress from './components/Progress';

const MarketingLazyApp = lazy(()=> import('./components/MarketingApp'));
const AuthLazyApp = lazy(()=> import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header/>
                    <Suspense fallback={<Progress/>}>
                        <Switch>
                            <Route path="/auth" component={AuthLazyApp} />
                            <Route path="/" component={MarketingLazyApp} />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    );
}