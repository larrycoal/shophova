import React from "react";
import {Link} from 'react-router-dom'
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
              <span><i class="fa fa-facebook" aria-hidden="true"></i></span>
              <span><i class="fa fa-twitter" aria-hidden="true"></i></span>
              <span><i class="fa fa-google-plus" aria-hidden="true"></i></span>
              <span><i class="fas fa-twitter    "></i></span>
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
              <Link to = "/registerLogin"><i class="fas fa-user icon"></i></Link>
              <Link to="/"><i class="fa fa-search" aria-hidden="true"></i></Link>
              <Link to="/"><i class="fa fa-heart icon" aria-hidden="true"></i></Link>
              <Link to="/"><i class="fa fa-shopping-bag shp_bag" aria-hidden="true"></i></Link>
          </div>
      </section>
    </div>
  );
};

export default header;
