import React, { Component } from "react";
import axios from "axios";
class App extends Component {
  componentDidMount() {
    axios.get("/api/product/asset_by_id").then((res) => {
  console.log(res)
    });
  }
  render() {
    return <div>hello</div>;
  }
}

export default App;
