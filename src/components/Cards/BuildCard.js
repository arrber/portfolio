import React from 'react';
import './BuildCard.scss';

const BuildCard = props => {
    return (
        <div className="build-card">
            <img
                src={props.image}
                alt={props.title}
                className="build-card-image"
            />
            <div className="build-card-body">
                <p className="build-title">{props.title}</p>
            </div>
        </div>
    );
};

export default BuildCard;