"use strict";

require("dotenv").load();

var express = require("express");

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(require("./src/server/routes/routes"));

app.listen(3001, function(){
    console.log("server running on port 3001");
});