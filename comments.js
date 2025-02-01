//Create web server
const express = require('express');
const app = express();
const port = 3000;

//Create a connection to the database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true, useUnifiedTopology: true});

//Create a schema
const Schema = mongoose.Schema;
const commentSchema = new Schema({
  name: String,
  email: String,
  comment: String
});

//Create a model
const Comment = mongoose.model('Comment', commentSchema);