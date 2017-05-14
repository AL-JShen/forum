const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  postTopic: 'string',
  postAuthor: 'string',
  postContent: 'string',
});

module.exports = mongoose.model('Post', PostSchema);
