import React, { Component } from "react";

class App extends Component {
  // Initialize the state with a count property
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // Increment method
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Decrement method
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
