var request = require("request");

module.exports = function(router) {

	router.get("/places", function() {
		try {
			var uri = [
		  		"https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=",
		  		"38.9135905",
		  		",",
		  		"-77.0091621",
		  		"&radius=500",
		  		"&types=bar|restaurant|cafe",
		  		"&opennow",
		  		"&key=",
		  		process.env.GOOGLE_KEY
		  	].join("");

		  	var res = request(uri, function (error, response, body) {
			  	if (!error && response.statusCode === 200) {
			  		console.log(body);
			  		return body;
				} else {
					console.log(error);
				}
			});

			this.body = res;

		} catch (err) {
			console.log(err);
			this.status = 500;
			return;
		}
	});

};