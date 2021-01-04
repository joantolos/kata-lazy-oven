'use strict';
/*jshint esversion: 6 */

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080, function(){
  console.log('Server started at http://localhost:8080/');
});

