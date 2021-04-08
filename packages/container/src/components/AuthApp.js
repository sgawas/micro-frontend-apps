import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default ({ onSignIn }) => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(()=> {
        // passing 2nd parameter callback function which returns location object
        const { onParentNavigation } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigation: ({ pathname: nextPathname }) => { // destructuring and renaming pathname as nextPathname
                const { pathname } = history.location; // history object has location
                if( pathname !== nextPathname ){ // if current path is different than next path then update path
                    history.push(nextPathname);
                }
            },
            // onSignIn: ()=>{
            //     onSignIn();
            // }
            onSignIn
        });

        history.listen(onParentNavigation);
    }, []);
    
    return <div ref={ref} />;
}