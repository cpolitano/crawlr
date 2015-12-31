var request = require("request");

module.exports = function(router) {

	router.get("/places", function(req, res) {
		var lat = req.query.lat || 38.9135463;
		var lon = req.query.lon || -77.009148;
		try {
			var uri = [
		  		"https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=",
		  		lat,
		  		",",
		  		lon,
		  		"&radius=500",
		  		"&types=bar|restaurant|cafe",
		  		"&opennow",
		  		"&key=",
		  		process.env.GOOGLE_KEY
		  	].join("");

		  	request(uri, function (error, response, body) {
			  	if (!error && response.statusCode === 200) {
			  		res.send(body);
				} else {
					console.log(error);
				}
			});

		} catch (err) {
			console.log(err);
			res.sendStatus(500);
			res.end();
		}
	});

};