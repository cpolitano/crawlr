import fetch from "isomorphic-fetch";

const getSpots = (lat, lon) => {
	let uri = ["/places?lat=", lat, "&lon=", lon].join("");
	fetch(uri, { credentials: "same-origin" })
	.then(resp => resp.json())
	.then(json => 
		console.log(json)
	);
}

const getLocation = () => {
	navigator.geolocation.getCurrentPosition(function(position) {
		console.log(position.coords);
		getSpots(position.coords.latitude, position.coords.longitude);
	});
}

export default getLocation;
