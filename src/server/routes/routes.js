var express = require("express");
var router = express.Router();

require("./index")(router);
require("./places")(router);

module.exports = router;
