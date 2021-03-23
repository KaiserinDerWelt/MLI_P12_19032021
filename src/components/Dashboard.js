import React from 'react';
import Topmenu from './menu/Topmenu';
import Sidebarleft from './sidebar/Sidebarleft';
import Welcome from './welcome/Welcome';

class Dashboard extends React.Component {
    render() {
        return (
            <>
                <div className="container-fluid">
                    {/*Calling components here*/}
                    <Topmenu />
                    <Sidebarleft />
                </div>
            </>
        )
    }
}

export default Dashboard;