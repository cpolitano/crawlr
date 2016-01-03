import fetch from "isomorphic-fetch";

export function getLocation() {
	return new Promise(function(resolve) {
		navigator.geolocation.getCurrentPosition(function(position) {
			console.log(position.coords);
			resolve(position.coords);
		});
	})
}

export function getSpots(lat, lon) {
	let uri = ["/places?lat=", lat, "&lon=", lon].join("");
	return (dispatch) => {
		fetch(uri, { credentials: "same-origin" })
		.then(resp => resp.json())
		.then(json => dispatch({
				type: "GET_SPOTS",
				spots: json
			})
		)
	}
}
