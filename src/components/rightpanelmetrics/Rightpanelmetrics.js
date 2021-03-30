import React from "react";

class Rightpanelmetric extends React.Component {
	render() {
		return (
			<>
				<div className="rightPanelContainer">
					<div className="row">
						<div className="col-12 caloriesIndicator">
							<div className="row">
								<div className="col-3">
									<a
										className="btn btnRightPanel energy"
										href="#"
										role="button"
									>
										<img
											className="buttonImgRightPanel"
											src="./img/energy.png"
											alt="energy-img"
										/>
									</a>
								</div>
								<div className="col-9">
									<p className="valueIndicator">
										{this.props.keyData?.calorieCount || 0}{" "}
										Kcal
									</p>
									<p className="nameIndicator">Calories</p>
								</div>
							</div>
						</div>
						<div className="w-100"></div>
						<div className="col-12 proteinsIndicator">
							<div className="row">
								<div className="col-3">
									<a
										className="btn btnRightPanel chicken"
										href="#"
										role="button"
									>
										<img
											className="buttonImgRightPanel"
											src="./img/chicken.png"
											alt="chicken-img"
										/>
									</a>
								</div>
								<div className="col-9">
									<p className="valueIndicator">
										{this.props.keyData?.proteinCount || 0}g
									</p>
									<p className="nameIndicator">Proteins</p>
								</div>
							</div>
						</div>
						<div className="w-100"></div>
						<div className="col-12 carbsIndicator">
							<div className="row">
								<div className="col-3">
									<a
										className="btn btnRightPanel apple"
										href="#"
										role="button"
									>
										<img
											className="buttonImgRightPanel"
											src="./img/apple.png"
											alt="apple-img"
										/>
									</a>
								</div>
								<div className="col-9">
									<p className="valueIndicator">
										{this.props.keyData
											?.carbohydrateCount || 0}
										g
									</p>
									<p className="nameIndicator">Carbs</p>
								</div>
							</div>
						</div>
						<div className="w-100"></div>
						<div className="col-12 lipidsIndicator">
							<div className="row">
								<div className="col-3">
									{" "}
									<a
										className="btn btnRightPanel burger"
										href="#"
										role="button"
									>
										<img
											className="buttonImgRightPanel"
											src="./img/cheeseburger.png"
											alt="cheeseburger-img"
										/>
									</a>
								</div>
								<div className="col-9">
									<p className="valueIndicator">
										{this.props.keyData?.lipidCount || 0}g
									</p>
									<p className="nameIndicator">Lipids</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Rightpanelmetric;
