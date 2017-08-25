import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

class StreamListItem extends Component{

    render(){
        return (
            
                <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4 mt-3">
                    <div className="card h-100 text-white bg-dark text-center border-0">
                        <img className="card-img-top" src={this.props.stream.image} alt="Card image cap" />
                        <div className="card-body">
                            <h4 className="card-title text-truncate">{this.props.stream.title}</h4>
                            <div className="mb-1 card-text text-truncate">
                                { ReactHtmlParser(this.props.stream.text)}
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default StreamListItem;