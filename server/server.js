const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Post = require('./posts');

const app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/posts');

app.listen('5000', () => {
  console.log('Server listening on port 5000');
});

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/posts', (req, res) => {
  Post.find({}, (err, item) => {
    if (err) res.send(err);
    res.send(item);
  });
});

app.get('/sort/:topic', (req, res) => {
  res.send(db.posts.find({}, {postTopic:{topic}}));
});

app.post('/new-post', (req, res) => {
  const newPost = new Post(req.body);
  newPost.save((err) => {
    if (err) res.send(err);
    res.send('Post added!');
  });
});