"use strict";
import React from "react";
import { connect } from "react-redux";
import { getLocation, getSpots } from "./geolocation";

const getHighestRated = (spots) => {
	let highestRated = spots.filter((spot) => {
		return spot.rating > 4;
	});
	return highestRated;
}

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
		let highestRatedSpots = [];
		if ( this.props.spots.length > 0 ) {
			highestRatedSpots = getHighestRated(this.props.spots);
		}
		
		return (
			<div>
				<h3>Best Neighborhood Spots</h3>
				<ul>
					{highestRatedSpots.map(spot => {
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

