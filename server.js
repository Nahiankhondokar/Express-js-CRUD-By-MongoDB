const dotenv = require('dotenv').config();
const color = require('colors');
const path = require('path');
const layout = require('express-ejs-layouts');
const express = require('express');
const MongoDBConnecton = require('./config/db');
const app = express();

// environment
const PORT = process.env.SERVER_PORT;

// mongoose conneciton
MongoDBConnecton();


// data create initialize
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


// static folder
app.use("/assets", express.static(path.join(__dirname, '/assets/')));

// view engine setup
app.set("view engine", "ejs");
app.set("layout", "layout/app");
app.use(layout);


// routes
app.use('/students', require(path.join(__dirname, 'routes/studentRoutes')));


// Server running
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`.bgMagenta.blue));