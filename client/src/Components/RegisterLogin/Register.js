import React, { Component } from "react";
import FormField from '../misc/Form/formField'
import {update,generate,isFormValid} from '../misc/Form/utils'
import {connect} from 'react-redux'
import {registerUser} from '../../Store/actions/user/user_action'
import {Link} from 'react-router-dom'


class Register extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formData: {
        name: {
            element: "input",
            value: "",
            config: {
              type: "text",
              name: "name_input",
              placeholder: "Enter Your First Name",
            },
            validation: {
              required: true,
            },
            valid: false,
            touched:false,
            validationMessage: "",
          },
          lastname: {
            element: "input",
            value: "",
            config: {
              type: "text",
              name: "lastname_input",
              placeholder: "Enter Your Last Name",
            },
            validation: {
              required: true,
            },
            valid: false,
            touched:false,
            validationMessage: "",
          },
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
        touched:false,
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
        touched:false,
        validationMessage: "",
      },
      confirmpassword: {
        element: "input",
        value: "",
        config: {
          type: "password",
          name: "confirmpassword_input",
          placeholder: "Enter Your Password",
        },
        validation: {
          required: true,
          confirmpassword:true,
          ref:"password"
        },
        valid: false,
        touched:false,
        validationMessage: "",
      },
    },
  };







updateform = (element)=>{
   const newFormdata = update(element,this.state.formData,"register")
   this.setState({
       formError:false,
       formData:newFormdata
   })
}


submitForm = (e)=>{
    e.preventDefault()
    let data = generate(this.state.formData)
    let formValid = isFormValid(this.state.formData)
    console.log(data,formValid)
//     if(formValid){
//    this.props.dispatch(registerUser(data))
//     }else{
//         this.setState({
//             formError:true
//         })
//     }
}



  render() {
    return (
        <div className="register_wrapper">
          <div className="register_container">
            <h2>Create An Account</h2>
            <form className="register_form" onSubmit={(e)=>this.submitForm(e)}>
            <FormField
              formdata = {this.state.formData.name}
               change = {(element)=>this.updateform(element)}
               id="name"
              />
              <FormField
              formdata = {this.state.formData.lastname}
               change = {(element)=>this.updateform(element)}
               id="lastname"
              />
              <FormField
              formdata = {this.state.formData.email}
               change = {(element)=>this.updateform(element)}
               id="email"
              />
              <FormField
              formdata = {this.state.formData.password}
               change = {(element)=>this.updateform(element)}
               id="password"
              />
              <FormField
              formdata = {this.state.formData.confirmpassword}
               change = {(element)=>this.updateform(element)}
               id="confirmpassword"
              />
              <input type="submit" name="submit" onClick={(e)=>this.submitForm(e)} />
              {
                  this.state.formError? (
                      <div className="error_label">
                          Invalid username or Password
                      </div>
                  ):null
              }
            </form>
            <div>
              <Link to="/registerLogin">
                <a href="/">Back To Login</a>
              </Link>
            </div>
          </div>
        </div>
    );
  }
}

export default connect()(Register);
