import React from 'react';
import './home.css';
import people from '../../assets/people3.PNG';
import friends from '../../assets/Friends.PNG';

const Home = () => {
    return (
        <div className="m8__home section__padding" id="home">
            <div className="m8__home-content">
                <h1 className="gradient__text">Find a M8.</h1>
                <h1 className="gradient__text">Pick a D8.</h1>
                <h1 className="gradient__text">Grab a Pl8.</h1>
                <p>Tired of endlessly swiping on profiles you really aren't interested in? Try M8 out! Our efforts at M8 are to maximize the efficiency of your search and minimize the time you waste because we actually value your time.</p>

                <div className="m8__home-content__input">
                    <input type="email" placeholder="Your Email Address"/>
                    <button type="button">Get Started</button>
                </div>

                <div className="m8__home-content__people">
                    <img src={people} alt="people" />
                    <p>2 Total Users</p>
                </div>
            </div>
            <div className="m8__home-image">
                <img src={friends} alt="friends" />
            </div>
            
        </div>
    )
}

export default Home