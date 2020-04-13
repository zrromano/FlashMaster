import React from "react";
import { Link } from "react-router-dom";
import Form from "./common/form";
import Joi from "joi-browser";
class Register extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(6).required().label("Password"),
  };

  doSubmit = () => {
    let { data } = this.state;
    let { errors } = this.state;

    console.log(this.props.firebase);
    this.props.firebase
      .createUser(data.email, data.password)
      .then(() => {
        this.props.firebase.login(data.email, data.password).then(() => {
          this.props.history.push("/");
        });
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/email-already-in-use")
          errors["email"] = "That email is already in use.";
        else if (error.code === "auth/invalid-email")
          errors["email"] = "That email is not valid.";
        else alert("An unexpected error occured. Try again later.");

        this.setState({ data, errors });
      });
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit} className="form">
          {this.renderInput("email", "Email", "email", null, 6)}
          {this.renderInput("password", "Password", "text", null, 6)}
          {this.renderButton("Create Account")}
          <Link to="/login" className="form-link">
            <small>Already have an account? Login here.</small>
          </Link>
        </form>
      </div>
    );
  }
}

export default Register;
