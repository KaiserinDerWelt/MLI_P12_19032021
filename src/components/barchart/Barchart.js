import React from "react";
import Chart from "react-apexcharts";
import axios from "axios";

class Barchart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			days: [],
			series: [],

			options: {
				legend: {
					position: "top",
					horizontalAlign: "right",
				},
				chart: {
					type: "bar",
					height: 350,
					background: "#ffffff",
					toolbar: {
						show: false,
					},
					colors: ["#000000", "#F44336"],
				},
				plotOptions: {
					bar: {
						horizontal: false,
						columnWidth: "55%",
						endingShape: "rounded",
						borderRadius: 3,
						columnWidth: "30px",
						colors: {
							backgroundBarRadius: 10,
						},
					},
				},
				dataLabels: {
					enabled: false,
				},
				stroke: {
					show: true,
					width: 2,
					colors: ["transparent"],
				},
				xaxis: {
					categories: [],
				},
				yaxis: {
					title: {
						text: "$ (thousands)",
					},
					opposite: true,
				},
				fill: {
					opacity: 1,
				},
				colors: ["#000000", "#F44336"],
			},
		};
	}

	componentDidMount() {
		axios.get(`/user/${this.props.userId}/activity`).then((result) => {
			this.setState({
				series: [
					{
						name: "Weight (kg)",
						data: result.data.data.sessions.map((i) => i.kilogram),
					},
					{
						name: "Burned calories (kCal)",
						data: result.data.data.sessions.map((i) => i.calories),
					},
				],
			});
			this.setState({
				options: {
					...this.state.options,
					xaxis: {
						categories: result.data.data.sessions.map((i) => i.day),
					},
				},
			});
		});
	}

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
						<h2>
							<Chart
								options={this.state.options}
								series={this.state.series}
								type="bar"
								height="350"
							/>
						</h2>
					</div>
				</div>
			</>
		);
	}
}

export default Barchart;
