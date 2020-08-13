import React from 'react';

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
  }

  foo() {
    console.log(this);
    console.log(this.state);
    console.log(this.props);
    this.setState();
  }

  bar = () => {
    console.log(this);
    console.log(this.state);
    console.log(this.props);
    this.setState();
  };

  handleLikeButtonClick = () => {
    this.setState({
      liked: !this.state.liked
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.foo}>Foo</button>
        <button onClick={this.bar}>Bar</button>
        <button onClick={this.handleLikeButtonClick}>
          {this.state.liked ? 'Liked' : 'Not Liked'}
        </button>
      </div>
    );
  }
}

export default LikeButton;
