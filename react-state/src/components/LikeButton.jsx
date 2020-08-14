import React from 'react';

class LikeButton extends React.Component {
  // 1st
  constructor() {
    super();
    this.state = {
      liked: false,
      count: 0
    };
    console.log('Like button component was constructed.');
  }

  handleLikeButtonClick = () => {
    this.setState({
      liked: !this.state.liked
    });
  };

  // 3rd
  componentDidMount() {
    console.log('Like button component was mounted into the DOM.');
  }

  // When state or props of component are updated
  componentDidUpdate(previousProps, previousState) {
    // throw new Error('Something broke');
    console.log('Like button component was updated.');
    console.log(previousState.liked, this.state.liked);
    if (previousState.liked !== this.state.liked) {
      console.log('Value that was updated IS liked value in state, lets increment count');
      this.setState({
        count: this.state.count + 1
      });
    } else {
      console.log(
        'Value that was updated is NOT liked value in state, therefore lets not increment count'
      );
    }
    // if (previousState.liked !== this.state.liked) {
    //   console.log('Like button component was updated because the liked value in the state changed');
    // } else {
    //   console.log(
    //     'Like button component was updated because the some other value in the props or in the state changed'
    //   );
    // }
    // console.log(previousProps, this.props);
    // console.log(previousState, this.state);
  }

  // Runs before component is unmounted and destroyed
  componentWillUnmount() {
    console.log('Like button component will disappear from the DOM.');
  }

  // 2nd
  // Immediately after setState is called
  render() {
    console.log('Like button component was rendered.');
    return (
      <div>
        <button onClick={this.handleLikeButtonClick}>
          {this.state.liked ? 'Liked' : 'Not Liked'}
        </button>
        <span>{this.state.count}</span>
      </div>
    );
  }
}

export default LikeButton;
