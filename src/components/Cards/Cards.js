import React from 'react';
import './Cards.css';

const Cards = props => {
    return (
        <div className="card-holder">
            <img
                src={props.image}
                alt={props.title}
                className="card-image"
            />
            <div className="card-body">
                <p className="title">{props.title}</p>
            </div>
        </div>
    );
};

export default Cards;