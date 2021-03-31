import React from "react";
import { Link } from "react-router-dom";
const links = [
  {
    name: "My Account",
    linkTo: "user/my_account",
  },
  {
    name: "User Information",
    linkTo: "user/user_information",
  },
  {
    name: "My Cart",
    linkTo: "user/my_cart",
  },
];
const userLayout = (props) => {
  const generateLinks = (links) =>
    links.map((link) => (
      <div>
        <Link to={link.linkTo}>{link.name}</Link>
      </div>
    ));
  return (
    <div className="dashboard_wrapper">
      <div className="left_wrapper">
        <h2>My Account</h2>
        {generateLinks(links)}
      </div>
      <div className="right_wrapper">{props.children}</div>
    </div>
  );
};

export default userLayout;
