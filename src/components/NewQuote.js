import React, { Component } from "react";

class NewQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  state = {};
  render() {
    return (
      <div onClick={this.props.handleClick} id="new-quote">
        New Quote
      </div>
    );
  }
}

export default NewQuote;
