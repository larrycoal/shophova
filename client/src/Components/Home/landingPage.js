import React from "react";
import modelRight from "../../images/models/modelRight.png";
import modelLeft from "../../images/models/modelLeft.png";

const LandingPage = () => {
  return (
    <div className="landing_wrapper">
      <section>
        <h3>Home OF Trendy Outfit</h3>
      </section>
      <section className="image_wrapper">
        <img src={modelLeft} alt="model" />
        <img src={modelRight} alt="model" />
      </section>
      <section className="pagination">
        <div>
          <span>
          </span>
        </div>
        <div>
          <span>
            
          </span>
        </div>
        <div>
          <span>
          </span>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;