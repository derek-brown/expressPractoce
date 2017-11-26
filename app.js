var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();

app.set("view engine", "ejs");
//questions on path.join and the immediate line below
//https://www.youtube.com/watch?v=QseHOX-5nJQ
//look at 30:10 in video url
app.set("views", path.join(__dirname, "views"));

//I stopped video at 37:26

app.use(bodyParser());

app.use(express.static(path.join(__dirname, "bower_components")));

//routes go here

app.use(require("./todos"));

app.listen(1337, function(){
	console.log("ready on port 1337");
});

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });