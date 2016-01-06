"use strict";
import React from "react";
import { connect } from "react-redux";
import { getLocation, getSpots } from "./geolocation";

class SpotsList extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		let dispatch = this.props.dispatch;
		getLocation().then(function(position) {
			dispatch(getSpots(position.latitude, position.longitude));
		}).catch(function(err) {
			console.log(err);
		})
	}

	render() {
		
		return (
			<div>
				<h3>Best Neighborhood Spots</h3>
				<ul>
					{this.props.spots.map(spot => {
							return <li key={spot.id}>{spot.name}</li>;
						})
					}
				</ul>
			</div>
		);
	}
}

export default SpotsList = connect(state => ({
	spots: state.getSpots
}))(SpotsList);

