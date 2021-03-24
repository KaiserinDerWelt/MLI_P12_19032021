import React from 'react';

class Barchart extends React.Component {
    render() {
        return (
            <>
                <div className="barChartContainer">
                    <div className="row">
                        <div className="col-8 titleActivityContainer">
                            <p className="titleActivity">Daily Activity</p>
                        </div>
                        <div className="col-4 indicatorsChartContainer">
                            <p className="weightIndicator">Weight</p>
                            <p className="burnedIndicator">Burned Calories</p>
                        </div>
                    </div>
                    <div className="barsChartMain">
                        <h2>HERE IT GOES THE CHART</h2>
                    </div>
                    <div className="individualChartsContainer">
                        <div className="row">
                            <div className="col-4 speedChart">8</div>
                            <div className="col-4 intensityChart">4</div>
                            <div className="col-4 scoreChart">4</div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default Barchart;