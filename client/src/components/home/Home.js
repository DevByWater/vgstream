import React from 'react';

import '../../assets/styles/Home.css';

const Home = () =>{
    return (
        <div className="Home">
            <div className="jumbotron d-flex justify-content-center">
                <div className="col-xs-10 col-sm-8 col-md-6 align-self-center rounded header">
                    <h1 className="display-4 rounded">Stream_Analytics</h1>
                    <p className="lead">Analytics of your favorite live Twitch.tv streams.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;