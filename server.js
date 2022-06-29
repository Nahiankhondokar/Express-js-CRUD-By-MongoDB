const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const colors = require('colors');
const expressLayout = require('express-ejs-layouts');
const mongoDBConnect = require('./config/db');
const app = express();
dotenv.config();

// get data initialize
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// mongodb connection
mongoDBConnect();

// environment
const PORT = process.env.SERVER_PORT || 5000;

// ejs setup 
app.set("view engine", "ejs");
app.set('layout', 'layouts/app');
app.use(expressLayout);

// static folder
app.use('/assets', express.static(path.join(__dirname, '/assets')));


// routes
app.use('/student', require('./routes/studentRoutes'));


// server
app.listen(PORT, () => console.log(`Express server is working on port ${PORT} . . .`.bgGreen.black));
