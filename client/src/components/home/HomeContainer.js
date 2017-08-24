import React, { Component } from 'react';

import Home from './Home';
import StreamFeature from '../streams/StreamFeature';

class HomeContainer extends Component{
    render(){
        return(
            <div>
                <Home />
                <StreamFeature />
            </div>
        )
    }
}

export default HomeContainer;