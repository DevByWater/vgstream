import React from 'react';
import { Link } from 'react-router-dom';



const Nav = () => {
    return (
        <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark Nav">
            <a className="navbar-brand brand" href="#">VG_STREAMS</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/streams">Live Streams</Link>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                <button className="btn my-2 my-sm-0 form-btn" type="submit">Search</button>
            </form>
            </div>
        </nav>
    )
}

export default Nav;