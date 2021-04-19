import React from "react";
import { Link,withRouter } from "react-router-dom";
import { connect } from "react-redux";
import{logoutUser} from '../../Store/actions/user/user_action'
const header = (props) => {
  const showLink = () => {
    if (props.user.userData) {
      if(props.user.userData.isAuth){
        return <span className="logout" onClick={logout}>Log out</span>;
      } else {
       return <Link to="/registerLogin">Log In</Link>;
      }
    }
  };
const logout = ()=>{
  props.dispatch(logoutUser()).then((res)=>{
    props.history.push("/")
  })
}
  return (
    <div className="header_wrapper">
      <section className="top">
        <div className="left">
          <span>Ngr</span>
          <span>Free shipping for orders above N50,000</span>
        </div>
        <div className="right">
          <span>Track Your Order</span>|<span>{showLink()}</span>
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
          <Link to="/userdashboard">
            <i class="fas fa-user icon"></i>
          </Link>
          <Link to="/">
            <i class="fa fa-search" aria-hidden="true"></i>
          </Link>
          <Link to="/">
            <i class="fa fa-heart icon" aria-hidden="true"></i>
          </Link>
          <Link to="/">
            <i class="fa fa-shopping-bag shp_bag" aria-hidden="true"></i>
          </Link>
        </div>
      </section>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(withRouter(header));
