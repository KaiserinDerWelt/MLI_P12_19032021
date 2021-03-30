import React from 'react';
import Topmenu from './menu/Topmenu';
import Sidebarleft from './sidebar/Sidebarleft';
import Welcome from './welcome/Welcome';
import Barchart from './barchart/Barchart';
import Rightpanelmetric from './rightpanelmetrics/Rightpanelmetrics';
import Average from './averagespeed/Average';
import Intensity from './intensity/Intensity';
import Score from './score/Score';
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

class Dashboard extends React.Component {
    state = {
		userId: 18,
		userData: {},
	};

	componentDidMount() {
		axios.get(`/user/${this.state.userId}`).then((result) => {
			this.setState({ userData: result.data.data });
		});
	}
    render() {
        return (
            <div className="container-fluid">
                {/*Calling components here*/}
                <Topmenu />
                <div className="container-fluid containerGraphics">
                    <div className="row">
                        <div className="col-1 sideContainer"><Sidebarleft /></div>
                        <div className="col-11 dashboardContainer">
                            <Welcome 
                            userInfos={this.state.userData.userInfos}
                            />
                            <div className="row">
                                <div className="col-9 chartsContainer"><Barchart userId={this.state.userId} />
                                    <div className="individualChartsContainer">
                                        <div className="row">
                                            <div className="col-4 speedChart"><Average
													userId={this.state.userId}
												/></div>
                                            <div className="col-4 intensityChart">
                                            <Intensity
													userId={this.state.userId}
												/>
                                            </div>
                                            <div className="col-4 scoreChart">
                                            {this.state.userData.score && (
													<Score
														todayScore={
															this.state.userData
																.score
														}
													/>
												)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 burnoutContainer">
                                <Rightpanelmetric
										keyData={this.state.userData.keyData}
									/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;