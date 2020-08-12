import React, { Component } from 'react';

class Message extends Component {
  constructor() {
    super();
    this.state = {
      active: true
    };
  }

  toggleMessage = () => {
    this.setState({
      active: !this.state.active
    });
    // this.setState(previouState => {
    //   return {
    //     active: !previouState.active
    //   };
    // });
    // this.setState(previousState => ({ active: !previousState.active }));
    // this.setState(({ active }) => ({ active: !active }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleMessage}>Toggle Message</button>
        {(this.state.active && (
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum maiores cupiditate
            consequatur quisquam sed qui adipisci, quis quidem deleniti quia sunt fuga, eveniet
            incidunt dolores minus beatae rem! Impedit, in?
          </p>
        )) || <span>Message is hidden</span>}
      </div>
    );
  }
}

export default Message;
