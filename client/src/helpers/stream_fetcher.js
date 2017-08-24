import axios from 'axios';

const root_url = 'https://api.twitch.tv/kraken/streams/'

const stream_fetcher = {
    getFeatured: () => {
        let fetch_url = `${root_url}featured`;
        axios.get(fetch_url)
            .then(response =>{
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    },
    getLive: () => {
        axios.get(root_url)
            .then(response =>{
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    },
    getByGame: (game) => {
        let fetch_url = `${root_url}games?query=${game}`;
        axios.get(fetch_url)
            .then(response => {
                console.log()
            })
    }

}