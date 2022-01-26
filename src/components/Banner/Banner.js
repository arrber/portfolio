import React from 'react';
import './Banner.scss'

const Banner = () => {
    return (
        <div className="row banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 banner-text">
                        <p className="main-title">
                            Hello I'm Arber, <br />
                            I love building websites.    
                        </p>
                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button className="btn--c skills">Skills</button>
                        <button className="btn--c contact">Contact</button>
                    </div>
                    <div className="banner-image">

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;