import fetch from "isomorphic-fetch";

const getNearbySpots = (lat, lon) => {
  	let uri = [
  		"https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=",
  		lat,
  		lon,
  		"&radius=500",
  		"&types=food",
  		"&key=",
  		process.env.GOOGLE_KEY
  	].join("");

	fetch(uri, {
		method: "get",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json"
		}
	})
	.then(resp => 
		console.log(resp)
	);
}