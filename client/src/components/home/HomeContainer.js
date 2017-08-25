import React, { Component } from 'react';
import axios from 'axios';

import Home from './Home';
import StreamFeature from '../streams/StreamFeature';

import { TWITCH_CLIENT_ID } from '../../config/settings';
import { featured_url } from '../../config/endpoints';

class HomeContainer extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        let fetch_url = `${featured_url}?limit=6`;
        axios.get(fetch_url, {headers: { 'Client-ID': TWITCH_CLIENT_ID}})
            .then(response => {
                this.setState({stream_data: response.data.featured});
            })
            .catch(error => {
                return error;
            });
    }

    render(){
        let stream_data = this.state.stream_data;
        if(!stream_data){
            return(
                <div>
                    <Home />
                    <StreamFeature loading={true} />
                </div>
            )
        }
        return(
            <div>
                <Home />
                <StreamFeature stream_data={stream_data} loading={false}/>
            </div>
        )
    }
}

export default HomeContainer;