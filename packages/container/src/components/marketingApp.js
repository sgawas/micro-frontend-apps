import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { mount } from 'marketing/MarketingApp';

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(()=> {
        // passing 2nd parameter callback function which returns location object
        const { onParentNavigation } = mount(ref.current, {
            onNavigation: ({ pathname: nextPathname }) => { // destructuring and renaming pathname as nextPathname
                const { pathname } = history.location; // history object has location
                if( pathname !== nextPathname ){ // if current path is different than next path then update path
                    history.push(nextPathname);
                }
            }
        });

        history.listen(onParentNavigation);
    }, []);
    
    return <div ref={ref} />;
}