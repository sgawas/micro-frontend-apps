import React, { lazy, Suspense, useState } from 'react';
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
    const [ isSignedIn, setIsSignedIn] = useState(false);
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header onSignOut={()=> setIsSignedIn(false)} isSignedIn={isSignedIn} />
                    <Suspense fallback={<Progress/>} >
                        <Switch>
                            <Route path="/auth" >
                                <AuthLazyApp onSignIn={()=> setIsSignedIn(true)} />
                            </Route>
                            <Route path="/" component={MarketingLazyApp} />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    );
}