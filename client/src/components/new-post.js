import React, { Component } from 'react';

class NewPost extends Component {

  render() {
    return (
      <div>
          Name: <input className='submission' id='inputAuthor' type='string' onChange={this.props.handleAuthor} />
          <br />
          Topic: <input className='submission' id='inputTopic' type='string' onChange={this.props.handleTopic} />
          <br />
          <textarea className='submission' id='inputContent' type='string' onChange={this.props.handleContent} />
          <br />
          <button id='submitPost' onClick={this.props.handleSubmit} type='button'>Post!</button>
      </div>
    );
  }

}

export default NewPost;