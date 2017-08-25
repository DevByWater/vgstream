//Twitch API endpoints
export const root_url = 'https://api.twitch.tv/kraken/streams/';
export const featured_url = `${root_url}featured`;
export const game_url = (game) => {
    return `${root_url}games?query=${game}`;
} 
export const channel_url = (channel) => {
    return `${root_url}${channel}`;
} 

