import React, { Component } from 'react';
import './Home.css';

//import Card from '../../components/Cards/Cards';
import Banner from '../../components/Banner/Banner';

class Home extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <Banner/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 pt-5 color--bg">
                            <p>cardss and other stuff here</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;