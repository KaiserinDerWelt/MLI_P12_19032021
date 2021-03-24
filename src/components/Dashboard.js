import React from 'react';
import Topmenu from './menu/Topmenu';
import Sidebarleft from './sidebar/Sidebarleft';
import Welcome from './welcome/Welcome';
import Barchart from './barchart/Barchart';
import Rightpanelmetric from './rightpanelmetrics/Rightpanelmetrics';


class Dashboard extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                {/*Calling components here*/}
                <Topmenu />
                <div className="container-fluid containerGraphics">
                    <div className="row">
                        <div className="col-1 sideContainer"><Sidebarleft /></div>
                        <div className="col-11 dashboardContainer">
                            <Welcome />
                            <div className="row">
                                <div className="col-9 chartsContainer"><Barchart /></div>
                                <div className="col-3 burnoutContainer"><Rightpanelmetric /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;