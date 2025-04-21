require('dotenv').config();
require('../config/databases')

var express = require('express') 
var app = express()               

var port = process.env.PORT || 8080  
var router = require('../routes')     

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router)
app.listen(port)
