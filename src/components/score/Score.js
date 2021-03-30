import React from 'react';
import Chart from "react-apexcharts";
import axios from "axios";

class Score extends React.Component{
    constructor(props) {
		super(props);

		this.state = {
			series: [this.props.todayScore * 100],
			options: {
				chart: {
					height: 350,
					type: "radialBar",
					toolbar: {
						show: false,
					},
				},
				plotOptions: {
					radialBar: {
						startAngle: -135,
						endAngle: 225,
						hollow: {
							margin: 0,
							size: "70%",
							background: "#fff",
							image: undefined,
							imageOffsetX: 0,
							imageOffsetY: 0,
							position: "front",
							dropShadow: {
								enabled: true,
								top: 3,
								left: 0,
								blur: 4,
								opacity: 0.24,
							},
						},
						track: {
							background: "#fff",
							strokeWidth: "67%",
							margin: 0, // margin is in pixels
							dropShadow: {
								enabled: true,
								top: -3,
								left: 0,
								blur: 4,
								opacity: 0.35,
							},
						},

						dataLabels: {
							show: true,
							name: {
								offsetY: 30,
								show: true,
								color: "#777",
								fontSize: "14px",
							},
							value: {
								formatter: function (val) {
									return parseInt(val) + "%";
								},
								color: "#111",
								offsetY: -20,
								fontSize: "36px",
								fontWeight: "700",
								show: true,
							},
						},
					},
				},
				fill: {
					type: "gradient",
					gradient: {
						shade: "dark",
						type: "horizontal",
						shadeIntensity: 0.5,
						gradientToColors: ["#FF0101"],
						inverseColors: true,
						opacityFrom: 1,
						opacityTo: 1,
						stops: [0, 100],
					},
				},
				stroke: {
					lineCap: "round",
				},
				labels: ["Of your goal"],
				colors: ["#FF0101"],
			},
		};
	}

    render(){
        return(
            <>
            <div className="scoreContainer">
            <Chart
						options={this.state.options}
						series={this.state.series}
						type="radialBar"
						height={250}
					/>
            </div>
            </>
        )
    }
}

export default Score;