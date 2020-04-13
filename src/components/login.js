import React from "react";
import { Link } from "react-router-dom";
import Form from "./common/form";
import Joi from "joi-browser";
class Login extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    let { data, errors } = this.state;

    this.props.firebase
      .login(data.email, data.password)
      .then(() => {
        this.props.history.push("/");
      })
      .catch((error) => {
        if (
          error.code ===
          ("auth/invalid email" ||
            "auth/wrong-password" ||
            "auth/user-not-found")
        )
          errors["email"] = "Invalid username or password.";
        else if (error.code === "auth/user-disabled")
          errors["email"] = "This account has been suspended.";
        else alert("An unexpected error occured");

        this.setState({ data, errors });
      });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} className="form">
          {this.renderInput("email", "Email", "email", null, 6)}
          {this.renderInput("password", "Password", "password", null, 6)}
          {this.renderButton("Login")}
          <Link to="/register" className="form-link">
            <small>Don't have an account? Register here.</small>
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
