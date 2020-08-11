import React from 'react';

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
  }

  handleLikeButtonClick = () => {
    this.setState({
      liked: !this.state.liked
    });
  };

  render() {
    return (
      <button onClick={this.handleLikeButtonClick}>
        {this.state.liked ? 'Liked' : 'Not Liked'}
      </button>
    );
  }
}

export default LikeButton;
