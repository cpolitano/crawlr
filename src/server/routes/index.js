var createDB = require("../db");

createDB();

module.exports = function(router) {

	router.get("/", function(req, res){
	  res.render("index.html");
	});

};