"use strict";
import React from "react";
import { connect } from "react-redux";
import { getLocation, getSpots } from "./geolocation";

class SpotsList extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		getLocation().then(function(position) {
			this.props.dispatch(getSpots(position.latitude, position.longitude));
		}).catch(function(err) {
			console.log(err);
		})
	}

	render() {
		return (
			<ul>
				{this.props.spots.map(spot => 
					<div>
						{spot.name}
					</div>
				)}
			</ul>
		);
	}
}

export default SpotsList = connect(state => ({
	spots: state.spots
}))(SpotsList);

