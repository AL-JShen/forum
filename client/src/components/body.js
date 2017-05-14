import React, { Component } from 'react';
import axios from 'axios';
import Posts from './posts';
import NewPost from './new-post';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postAuthor: '',
      postTopic: '',
      postContent: '',
      posts: []
    };
    this.getPosts = this.getPosts.bind(this);
    this.handleAuthor = this.handleAuthor.bind(this);
    this.handleTopic = this.handleTopic.bind(this);
    this.handleContent = this.handleContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getPosts() {
    const promise = axios.get('http://localhost:5000/posts');
    promise.then((response) => {
      this.setState({
        posts: response.data
      });
    });
  }
  
  handleAuthor(event) {
    this.setState({
      postAuthor: event.target.value
    });
  }
  
  handleTopic(event) {
    this.setState({
      postTopic: event.target.value
    });
  }
  
  handleContent(event) {
    this.setState({
      postContent: event.target.value
    });
  }
  
  handleSubmit() {
      const newPost = {
        postAuthor: this.state.postAuthor,
        postTopic: this.state.postTopic,
        postContent: this.state.postContent,
    };
    const promise = axios.post('http://localhost:5000/new-post', newPost);
    promise.then((response) => {
      this.getPosts();
      setTimeout(() => { this.getPosts(); }, (5));
    });
    this.resetInputs();
  }
  
  resetInputs() {
    document.getElementById("inputAuthor").value="";
    document.getElementById("inputTopic").value="";
    document.getElementById("inputContent").value="";
  }
  
  componentWillMount() {
    this.getPosts();
  }
  
  render() {
    return (
      <div className='body'>
        <div className='submitNewPost'>
          <NewPost handleAuthor={this.handleAuthor} handleTopic={this.handleTopic} handleContent={this.handleContent} handleSubmit={this.handleSubmit} />
        </div>
        <div className='renderPosts'>
          <Posts currentPosts={this.state.posts} />
        </div>
      </div>
    );
  }

}

export default Body;