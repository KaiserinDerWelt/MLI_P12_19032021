import React from 'react';
import Chart from "react-apexcharts";
import axios from "axios";

class Intensity extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: "Series 1",
                    data: [80, 50, 30, 40, 100, 20],
                },
            ],
            options: {
                legend: {
                    show: false,
                },
                chart: {
                    height: 350,
                    type: "radar",
                    toolbar: {
                        show: false,
                    },
                    dropShadow: {
                        enabled: true,
                        blur: 1,
                        left: 1,
                        top: 1,
                    },
                },

                stroke: {
                    width: 0,
                },
                fill: {
                    opacity: 0.7,
                    colors: ["#ff0000"],
                },
                markers: {
                    size: 0,
                },
                yaxis: {
                    show: false,
                },
                xaxis: {
                    labels: {
                        style: {
                            colors: "#f2f2f2",
                            opacity: 0,
                        },
                    },
                    categories: [],
                },
            },
        };
    }

    componentDidMount() {
        axios.get(`/user/${this.props.userId}/performance`).then((result) => {
            let arr = result.data.data.data;
            arr = arr.sort((a, b) =>
                a.kind > b.kind ? 1 : b.kind > a.kind ? -1 : 0
            );
            this.setState({
                series: [
                    {
                        name: "Performance",
                        data: arr.map((i) => i.value),
                    },
                ],
            });
            this.setState({
                options: {
                    ...this.state.options,
                    xaxis: {
                        categories: Object.keys(result.data.data.kind)
                            .sort()
                            .map((k, i) => result.data.data.kind[k]),
                    },
                },
            });
        });
    }
    render() {
        return (
            <>
                <div className="intensityContainer">
                    <div
                        className="intensityContainer"
                        style={{ display: "flex", justifyContent: "center" }}
                    >
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="radar"
                            height={210}
                            width={200}
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default Intensity;