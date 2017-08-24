import axios from 'axios';

import { TWITCH_CLIENT_ID } from '../settings';
const root_url = 'https://api.twitch.tv/kraken/streams/'

const stream_fetcher = {
    //Returns array of objects
    getFeatured: () => {
        let fetch_url = `${root_url}featured`;
        axios.get(fetch_url, {headers: { 'Client-ID': TWITCH_CLIENT_ID}})
            .then(response =>{
                console.log('Featured: ', response.data.featured);
                return { featured: response.data.featured };
            })
            .catch(error => {
                console.log(error);
            });
    },
    //Returns array of objects
    getLive: () => {
        axios.get(root_url)
            .then(response =>{
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    },
    //Returns single object
    getByGame: (game) => {
        let fetch_url = `${root_url}games?query=${game}`;
        axios.get(fetch_url)
            .then(response => {
                console.log(response);
            })
            .catch(error =>{
                console.log(error);
            })
    },
    getByChannel: (channel) => {
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