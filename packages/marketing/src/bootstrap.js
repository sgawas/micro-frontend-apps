import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// mount function to start up the app
const mount = element => {
    ReactDOM.render(
        <App/>,
        element
    );
}

// if we are in development and in isolation
// call mount function immediately
if(process.env.NODE_ENV === 'development'){
    const devRootElement = document.querySelector('#_marketing-dev-root');
    if(devRootElement){
        mount(devRootElement);
    }
}

// if we are running through container
// we should export mount function
export { mount };