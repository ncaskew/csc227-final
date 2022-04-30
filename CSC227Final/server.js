'use strict';
var http = require('http');

var ipaddress = "0.0.0.0";
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port, ipaddress);
