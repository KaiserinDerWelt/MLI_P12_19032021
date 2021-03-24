import React from 'react';
import Topmenu from './menu/Topmenu';
import Sidebarleft from './sidebar/Sidebarleft';
<<<<<<< HEAD
import Welcome from './welcome/Welcome';
import Barchart from './barchart/Barchart';
import Rightpanelmetric from './rightpanelmetrics/Rightpanelmetrics';
=======
>>>>>>> 3ff52538eca7cda366ab1784ea4817651865c6c3

class Dashboard extends React.Component {
    render() {
        return (
            <>
<<<<<<< HEAD
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
=======
       <div className="container-fluid">
           {/*Calling components here*/}
           <Topmenu />
           <Sidebarleft />
       </div>
>>>>>>> 3ff52538eca7cda366ab1784ea4817651865c6c3
            </>
        )
    }
}

export default Dashboard;