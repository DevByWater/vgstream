import React, { Component } from 'react';

import stream_fetcher from '../../helpers/stream_fetcher';
import StreamList from './StreamList';

class StreamFeature extends Component{
    constructor(){
        super();
        this.state = { featured: []};
    }

    renderFeatured(){
        let featured = stream_fetcher.getFeatured();
        if(featured === null){
            return(
                <div className="container">
                    <h4 className="text-center">Loading...</h4>
                </div>
            )
        }
        return (
            <StreamList streams={featured} />
        )
    }
    
    render(){
       
        return (
            <div className="container col-xs-10">
                <h2 className="display-4 text-center">Featured Streams</h2>
                <div className="col-xs-12">
                    {this.renderFeatured()}
                </div>
            </div>
        )
    }
}

export default StreamFeature;