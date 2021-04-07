import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

// mount function to start up the app
const mount = (element, { onNavigation, defaultHistory }) => {
    const history = defaultHistory || createMemoryHistory();
    if(onNavigation){
        history.listen(onNavigation);
    }

    ReactDOM.render(
        <App history={history} />,
        element
    );

    return {
        onParentNavigation ({ pathname : nextPathname }){
            const { pathname } = history.location;
            if(pathname!== nextPathname){
                history.push(nextPathname);
            }
        }
    }
}

// if we are in development and in isolation
// call mount function immediately
if(process.env.NODE_ENV === 'development'){
    const devRootElement = document.querySelector('#_marketing-dev-root');
    if(devRootElement){
        mount(devRootElement, { defaultHistory: createBrowserHistory() });
    }
}

// if we are running through container
// we should export mount function
export { mount };