import React from 'react';
import './Banner.scss'

const Banner = () => {
    return (
        <div className="row banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 banner-text">
                        <h1 className="color--subtext main-title">
                            Hello I'm Arber, <br />
                            I love building websites.    
                        </h1>
                        <p className="color--text description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button className="btn-skills">Skills</button>
                    </div>
                    <div className="col-lg-6 banner-image">
                        <img 
                            src="/assets/images/banner.png" 
                            alt="Banner logo"
                            className='logo-test'
                        />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;