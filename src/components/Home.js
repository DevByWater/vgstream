import React from 'react';

import '../assets/styles/Home.css';

const Home = () =>{
    return (
        <div className="Home">
            <div className="jumbotron d-flex justify-content-center">
                <div className="col-xs-10 col-sm-8 col-md-6 align-self-center header">
                    <h1 className="display-3">Live Gaming</h1>
                    <p className="lead">Watch your favorite live gaming streams.</p>

                    <p>Powered through Twitch.tv</p>
                </div>
            </div>
        </div>
    );
}

export default Home;