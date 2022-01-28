import React, { Component } from 'react';
import './Home.css';

import Banner from '../../components/Banner/Banner';
import BuildCard from '../../components/Cards/BuildCard';

class Home extends Component {

    state = {
        build: {}
    }

    /*
    componentDidMount(){
        axios({
            method: 'GET',
            url: 'http://localhost:8000/api/home',
            params: {
                age: 1000,
                posts: 2000,
                money: 500
            },
            data: {
                
            }
        })
            .then((data) => {
                this.setState({
                    work: data.data.WORK,
                    talent: data.data.TALENT,
                    offer: data.data.OFFER
                })
            })
            .catch((error) => {
                console.log(error);
            })
    };*/


    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <Banner/>
                </div>
                <div className="container color--bg">
                    <div className="row">
                        <div className="col-lg-12 pt-5">
                            <div className="build-holder">
                                <p>fontawesome icon here</p>
                                <h2>Apps I've build</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            
                        </div>
                        <div className="col-lg-12">
                            <div className="row">
                               {
                                    this.state.build.builds?.map((el, index) => {
                                        return(
                                            <div className="col-lg-3 p-3" key={index}>
                                                <BuildCard 
                                                    image={el.image}
                                                    title={el.title}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-12 pt-5">
                                    <div className="skills-holder">
                                        <p>fontawesome icon here</p>
                                        <h2>Skills & Technologies</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;