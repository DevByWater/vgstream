import axios from 'axios';

import { TWITCH_CLIENT_ID } from '../config/settings';
const root_url = 'https://api.twitch.tv/kraken/streams/'

const stream_fetcher = {
    //Returns array of objects
    getFeatured: () => {
        var stream_data; 
        let fetch_url = `${root_url}featured`;
        axios.get(fetch_url, {headers: { 'Client-ID': TWITCH_CLIENT_ID}})
            .then(response =>{
                stream_data = response.data.featured;
                console.log('Featured: ', stream_data);
            })
            .catch(error => {
                console.log(error);
                return error;
            });
        return stream_data;
    },
    //Returns array of objects
    getLive: (callback) => {
        axios.get(root_url)
            .then(response =>{
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    },
    //Returns single object
    getByGame: (game, callback) => {
        let fetch_url = `${root_url}games?query=${game}`;
        axios.get(fetch_url)
            .then(response => {
                console.log(response);
            })
            .catch(error =>{
                console.log(error);
            })
    },
    getByChannel: (channel, callback) => {
        let fetch_url = `${root_url}${channel}`;
        axios.get(fetch_url)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }


}

export default stream_fetcher;