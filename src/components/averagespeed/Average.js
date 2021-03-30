import React from "react";
import Chart from "react-apexcharts";
import axios from "axios";

class Average extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [],
			options: {
				legend: {
					show: false,
				},
				chart: {
					height: 350,
					type: "line",
					toolbar: {
						show: false,
					},
				},
				dataLabels: {
					enabled: false,
				},
				stroke: {
					show: true,
					curve: "smooth",
					lineCap: "butt",
					colors: ["#ffffff"],
					width: 2,
					dashArray: 0,
				},
				grid: {
					show: false,
				},
				xaxis: {
					axisBorder: {
						show: false,
					},
					axisTicks: {
						show: false,
					},
					categories: [],
					labels: {
						style: {
							colors: "#ffffff",
						},
					},
				},
				yaxis: {
					show: false,
				},
				fill: {
					type: "gradient",
					gradient: {
						shade: "dark",
						gradientToColors: ["#ffffff"],
						shadeIntensity: 1,
						type: "horizontal",
						opacityFrom: 0.2,
						opacityTo: 1,
						stops: [0, 100, 100, 100],
					},
				},
				tooltip: {
					enabled: false,
				},
			},
		};
	}

	componentDidMount() {
		axios
			.get(`/user/${this.props.userId}/average-sessions`)
			.then((result) => {
				this.setState({
					series: [
						{
							name: "Average sessions",
							data: result.data.data.sessions.map(
								(i) => i.sessionLength
							),
						},
					],
				});
				this.setState({
					options: {
						...this.state.options,
						xaxis: {
							categories: result.data.data.sessions.map(
								(i) => i.day
							),
						},
					},
				});
			});
	}

	render() {
		return (
			<>
				<div className="averageContainer">
					<Chart
						options={this.state.options}
						series={this.state.series}
						type="line"
						height="210"
						width="210"
					/>
				</div>
			</>
		);
	}
}

export default Average;
