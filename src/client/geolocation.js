const getLocation = () => {
	navigator.geolocation.getCurrentPosition(function(position) {
		console.log(position.coords);
	});
}

export default getLocation;
