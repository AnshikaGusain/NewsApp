import React, { Component } from 'react';

export default class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,url}=this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem", margin:"5px"}}>
                    <img src={imageUrl} className="card-img-top" alt="Fail to load"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}
