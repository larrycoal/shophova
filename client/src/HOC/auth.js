import { connect } from "react-redux";
import React, { Component } from "react";
import { CircularProgress } from "@material-ui/core";
import { authenticateUser } from "../Store/actions/user/user_action";

//reload checks if route is private === true,public===null or conditional===false
export const auth = (ComposedClass, reload, admin = null) => {
  class AuthenticationCheck extends Component {
    state = {
      loading: true,
    };
    componentDidMount() {
      this.props.dispatch(authenticateUser()).then(() => {
        let user = this.props.user.userData;
        if (!user.isAuth) {
          if (reload) {
            this.props.history.push("/registerLogin");
          }
        } else {
          if (admin && !user.isAdmin) {
            this.props.history.push("/userdashboard");
          } else {
            if (reload === false) {
              this.props.history.push("/userdashboard");
            }
          }
        }

        this.setState({
          loading: false,
        });
      });
    }
    render() {
      if (this.state.loading) {
        return (
          <div className="main_loader">
            <CircularProgress thickness={6} style={{ color: "blue" }} />
          </div>
        );
      } else {
        return (
          <ComposedClass {...this.props} user={this.props.user.userData} />
        );
      }
    }
  }
  const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  };
  return connect(mapStateToProps)(AuthenticationCheck);
};
