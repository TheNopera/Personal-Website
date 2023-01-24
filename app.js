
const express = require("express");
const boddyParser = require("body-parser");
const ejs = require("ejs");
const routes = require('./routes/routes');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(routes);
app.use(express.static(__dirname + "/public"));
app.use(boddyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.listen(PORT,()=>{
    console.log("Hello world on PORT 3000");
});