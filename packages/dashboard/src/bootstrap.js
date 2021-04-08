import { createApp } from 'vue';

import Dashboard from './components/Dashboard.vue';

// mount function to start up the app
const mount = (element) => {
    const app = createApp(Dashboard);
    app.mount(element);
}

// if we are in development and in isolation
// call mount function immediately
if(process.env.NODE_ENV === 'development'){
    const devRootElement = document.querySelector('#_dashboard-dev-root');
    if(devRootElement){
        mount(devRootElement);
    }
}

// if we are running through container
// we should export mount function
export { mount };