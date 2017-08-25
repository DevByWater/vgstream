import React, { Component } from 'react';

import StreamList from './StreamList';

class StreamFeature extends Component{
    
    render(){
        console.log(this.props)
        if(!this.props.stream_data){
            return(
                <div className="container col-xs-10">
                <h2 className="display-4 text-center">Featured Streams</h2>
                <div className="col-xs-12">
                    <h3 className="text-center">Loading...</h3>
                </div>
            </div>
            )
        } 
        return (
            <div className="container col-xs-10">
                <h2 className="display-4 text-center">Featured Streams</h2>
                <div className="col-xs-12">
                    <StreamList stream_data={this.props.stream_data} />
                </div>
            </div>
        )
    }
}

export default StreamFeature;