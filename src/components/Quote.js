import React, { Component } from "react";

import SVGComponent from "./SVGComponent";
class Quote extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div id="text">
        <h1>
          <SVGComponent />
          {this.props.data.quote}
        </h1>
        <span id="author">- {this.props.data.author}</span>
      </div>
    );
  }
}

export default Quote;
