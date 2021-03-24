import React from 'react';

class Sidebarleft extends React.Component {
    render() {
        return (
            <div className="vertical-menu">
                <a className="btn" href="#" role="button">
                    <img className="buttonImg" src="./img/Yoga.png" alt="yoga-img" />
                </a>
                <a className="btn" href="#" role="button">
                    <img className="buttonImg" src="./img/Swim.png" alt="swim-img" />
                </a>
                <a className="btn" href="#" role="button">
                    <img className="buttonImg" src="./img/Bike.png" alt="bike-img" />
                </a>
                <a className="btn" href="#" role="button">
                    <img className="buttonImg" src="./img/Gym.png" alt="gym-img" />
                </a>
                <div className="verticalText">
                    <p className="copyrightText">Copyright, Sportsee 2021</p>
                </div>
            </div>


        )
    }
}


export default Sidebarleft;