import React, { Component } from "react";
import modelRight from "../../images/models/modelRight.png";
import modelLeft from "../../images/models/modelLeft.png";
import modelTwoRight from "../../images/models/modelTwoRight.png";
import modelTwoLeft from "../../images/models/modelTwoLeft.png";
class landingPage extends Component {
    state =[
        {
            modelLeft : modelLeft,
            modelRight : modelRight,
        },
        {
            modelLeft : modelTwoLeft,
            modelRight : modelTwoRight,
        }
    ]
  render() {
    return (
      <div className="landing_wrapper">
        <section>
          <h2>Home OF Trendy Outfit</h2>
          <p>lorem ipsum doloret</p>
        </section>
        <section className="image_wrapper">
          <img src={this.state[1].modelLeft} alt="model" />
          <img src={this.state[1].modelRight} alt="model" />
        </section>
        <section className="pagination">
          <span className="active"></span>
          <span></span>
          <span></span>
        </section>
      </div>
    );
  }
}

export default landingPage;
