import React, { Component } from "react";
import FormField from "../misc/Form/formField";
import { update, generate, isFormValid } from "../misc/Form/utils";
import { connect } from "react-redux";
import { loginUser } from "../../Store/actions/user/user_action";
import { Link, withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formData: {
      email: {
        element: "input",
        value: "",
        config: {
          type: "email",
          name: "email_input",
          placeholder: "Enter Your Email",
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      password: {
        element: "input",
        value: "",
        config: {
          type: "password",
          name: "password_input",
          placeholder: "Enter Your Password",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
    },
  };

  updateform = (element) => {
    const newFormdata = update(element, this.state.formData, "login");
    this.setState({
      formError: false,
      formData: newFormdata,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    let data = generate(this.state.formData);
    let formValid = isFormValid(this.state.formData);
    if (formValid) {
      this.props.dispatch(loginUser(data)).then((response) => {
        if(response.payload.success){
          this.props.history.push("/userdashboard");
        }else{
          this.setState({
            formError: true,
          });
        }
       
      });
    } else {
      this.setState({
        formError: true,
      });
    }
  };

  render() {
    return (
      <div className="login_wrapper">
        <div className="login_container">
          <h2>Login Your Account</h2>
          <form className="login_form" onSubmit={(e) => this.submitForm(e)}>
            <FormField
              formdata={this.state.formData.email}
              change={(element) => this.updateform(element)}
              id="email"
            />
            <FormField
              formdata={this.state.formData.password}
              change={(element) => this.updateform(element)}
              id="password"
            />
            <input
              type="submit"
              name="submit"
              onClick={(e) => this.submitForm(e)}
            />
            {this.state.formError ? (
              <div className="error_label">Invalid username or Password</div>
            ) : null}
          </form>
          <div>
            <span>
              <a href="/">Forgot Password?</a>
            </span>
            <Link to="/register">
              <a href="/">Create An Account</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(withRouter(Login));
