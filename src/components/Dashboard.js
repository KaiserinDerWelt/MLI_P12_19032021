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
                    <div className="container-fluid containerGraphics">
                        <div className="row">
                            <div className="col-1 sideContainer"><Sidebarleft /></div>
                            <div className="col-11 dashboardContainer">
                              <Welcome />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Dashboard;