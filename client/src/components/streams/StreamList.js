import React, { Component } from 'react';

import StreamListItem from './StreamListItem';

class StreamList extends Component {

    renderStreamItems(){
        for(let i = 0; i < this.props.stream_data.length; i++){
            return 
        }
    }
    streamItems = this.props.stream_data.map(item => {
        return(
            <StreamListItem
            stream={item}
            key={item.stream._id}
             />
        )
    });

    render(){
        return (
            <div className="d-flex mt-4 flex-wrap justify-content-center col-xs-10 card-container">
                {this.streamItems}
            </div>
        )
    }
}

export default StreamList;