import React, { Component } from 'react'



class StreamList extends Component {
    renderStreams(streamData){
        let channel = { id: streamData.channel._id, name: streamData.channel.display_name};
        let stream = { avg_fps: streamData.average_fps, viewers: streamData.viewers, game: streamData.game};

        return (
            <li>
                <div className="card">
                    <div className="card-block">
                        <h3 className="card-title">{stream.game}</h3>
                        <h4 classname="card-title">{channel.name}</h4>
                        <p className="card-text">
                            <ul>
                                <li>{stream.viewers}</li>
                                <li>{stream.avg_fps}</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </li>
        )
    }

    render(){
        console.log('Stream List Props: ', this.props)
        return(
            <ul>
                <li>streams</li>
            </ul>
        )
    }
}

export default StreamList;