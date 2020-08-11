import React from 'react';

// let value = 0;

// const Counter = props => {
//   const handleIncrementClick = () => {
//     value++;
//   };

//   return (
//     <div>
//       <span>{value}</span>
//       <button onClick={handleIncrementClick}>+</button>
//     </div>
//   );
// };

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }

  // Public class method syntax,
  // required when method is passed directly into event handler
  handleIncrementClick = () => {
    // This is not allowed
    // we should not mutate the state object directly
    // this.state.value++;
    // this.render();

    // Instead we should call setState(),
    // which is a built-in method in react class components
    // that mutates the state for you,
    // and triggers a re-render
    this.setState({
      value: this.state.value + 1
    });

    // this.setState(previousState => {
    //   return {
    //     value: previousState.value + 1
    //   };
    // });
  };

  render() {
    return (
      <div>
        <p>{this.props.message}</p>
        <span>{this.state.value}</span>
        <button onClick={this.handleIncrementClick}>+</button>
      </div>
    );
  }
}

export default Counter;
