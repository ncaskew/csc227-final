'use strict';
var http = require('http');
var express = require("express");

var ipaddress = "0.0.0.0";
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var app = express();
app.use(express.static("public"));

app.listen(port, ipaddress);
