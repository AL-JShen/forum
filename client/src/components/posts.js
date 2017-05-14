import React, { Component } from 'react';
import _ from 'underscore';

class Posts extends Component {
  
  render() {
    let currentPosts = this.props.currentPosts;
    currentPosts.sort((a, b) => {
      const topicA = a.postTopic.toUpperCase();
      const topicB = b.postTopic.toUpperCase();
      if (topicA < topicB) {
        return -1;
      }
      if (topicA > topicB) {
        return 1;
      }
    });
      return (
        <div>
          {currentPosts.map((post, index) => {
            return <div className='post' key={index}>({post.postTopic}) { post.postAuthor}: { post.postContent }</div>
          })} 

        </div>
    );
  }

}

export default Posts;