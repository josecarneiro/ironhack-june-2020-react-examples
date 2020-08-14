import React, { Component } from 'react';

class IncrementTrigger extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onIncrement}>
          Current count is at {this.props.count}, increment by 1
        </button>
      </div>
    );
  }
}

export default IncrementTrigger;
