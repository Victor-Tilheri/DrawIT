var express = require("express");
var socket = require("socket.io");


//Express setup
var app = express();
var server = app.listen(3000, function() {
    console.log("Server is running!");
});


app.use(express.static("public"));

//Socket setup
var io = socket(server);

var players = [];
var blobs = [];

//variables
io.on("connection", function(socket) {
    socket.on("clientConnect", function (data) {        

    });

    socket.on("disconnect", function () {

        console.log("Client disconnected! " + players.length);
    });

    socket.on("sendPaint", function (paintData) {
        socket.broadcast.emit("paint", paintData);
    });
});
