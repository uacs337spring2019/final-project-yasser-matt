
"use strict";   
const express = require("http");
const app = express();
var mysql = require('mysql');
let Response = "";

app.use(express.static('public'));

app.get('/', function (req, res) {
    console.log("Service Connected"); 
    res.header("Access-Control-Allow-Origin", "*");

    res.send(JSON.stringify("Tester Web Page")); 
    
        });


app.listen(process.env.PORT); //Specify the port number 