"use strict";
import React from "react";
import Card from "material-ui/lib/card/card";
import CardHeader from "material-ui/lib/card/card-header";
import CardText from "material-ui/lib/card/card-text";
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
			console.log(highestRatedSpots);
		}
		
		return (
			<div>
				{highestRatedSpots.map(spot => {
						return (
							<Card initiallyExpanded={false}
								key={spot.id}>
								<CardHeader
									title={spot.name}
									subtitle={spot.vicinity}
									actAsExpander={true}
									showExpandableButton={true} />
								<CardText expandable={true}>
									{spot.name}<br/>
									{spot.types[0]}, {spot.types[1]}<br/>
									Rating: {spot.rating}, Price: {spot.price_level}
								</CardText>
							</Card>
						);
					})
				}
			</div>
		);
	}
}

export default SpotsList = connect(state => ({
	spots: state.getSpots
}))(SpotsList);

