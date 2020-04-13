import React from "react";
import { Redirect } from "react-router-dom";

const Logout = ({ firebase }) => {
  firebase.logout();
  return <Redirect to="/" />;
};

export default Logout;
