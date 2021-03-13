import React from "react";

const header = () => {
  return (
    <div className="header_wrapper">
      <section className="top">
          <div className="left">
              <span>Ngr</span>
              <span>Free shipping for orders above N50,000</span>
          </div>
          <div className="right">
              <span>Track Your Order</span>
              <span>fb</span>
              <span>Tw</span>
              <span>G+</span>
              <span>Ln</span>
          </div>
      </section>
      <section className="bottom">
          <div className="logo">STORE-HOVA</div>
          <div className="links">
              <a href="/">Latest Products</a>
              <a href="/">Seller Stores</a>
              <a href="/">Explore Categories</a>
          </div>
          <div className="utilities">
              <span>user</span>
              <span>user</span>
              <span>user</span>
              <span>user</span>
          </div>
      </section>
    </div>
  );
};

export default header;
