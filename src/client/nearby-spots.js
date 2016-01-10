"use strict";
import React from "react";
import List from "material-ui/lib/lists/list";
import ListItem from "material-ui/lib/lists/list-item";
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
			<ul>
				{highestRatedSpots.map(spot => {
						return <li key={spot.id}>{spot.name}</li>;
					})
				}
			</ul>
		);
	}
}

export default SpotsList = connect(state => ({
	spots: state.getSpots
}))(SpotsList);

