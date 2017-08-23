import axios from 'axios';
import * as actionTypes from './types';
import urls from './urls';


export const getStreamList = ()=>{
    let request = axios.get(urls.getStreamList);
    
    console.log('Request: ', request)

    return {
        type: actionTypes.GET_STREAM_LIST,
        payload: request
    }
}

export const getStreamByChannel = (channelID)=>{
    let request = axios.get(urls.byChannel(channelID));

    console.log('Request: ', request);

    return {
        type: actionTypes.GET_STREAM_BY_CHANNEL,
        payload: request
    }
}

export const searchStreamByGame = (game) =>{
    let request = axios.get(urls.byGame(game));

    console.log('Request: ', request);

    return {
        type: actionTypes.GET_STREAM_BY_GAME,
        payload: request
    }
}