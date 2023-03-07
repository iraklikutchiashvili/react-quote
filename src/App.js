import React from "react";
import SocialIcons from "./components/SocialIcons";
import NewQuote from "./components/NewQuote";
import Quote from "./components/Quote";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
    };
  }

  fetchData = () => {
    fetch("https://api.api-ninjas.com/v1/quotes?category", {
      headers: { "X-Api-Key": "9DCEIqZKqbs1NMP6HCoQ/A==jKhxoNEJtkiXwIqO" },
      contentType: "application/json",
    })
      .then((res) => res.json())
      .then((data) =>
        this.setState({ quote: data[0].quote, author: data[0].author })
      )
      .catch((err) => console.log(err));
  };
  handleClick = () => {
    this.fetchData();
  };
  componentDidMount() {
    this.fetchData();
  }
  render() {
    return (
      <div id="quote-box">
        <Quote data={this.state} />
        <SocialIcons />
        <NewQuote handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
