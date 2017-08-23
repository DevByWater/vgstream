const urls = {
    root: 'https://api.twitch.tv/kraken/streams/',
    featured: `${this.root}featured?=25`,
    byGame: (game) =>{
        return `${this.root}game?=${game}`
    },
    byChannel: (channelID)=>{
        return `${this.root}${channelID}`
    }
}

export default urls;