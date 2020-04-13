import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = ({ links, user }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <NavLink className="nav-link" to="/">
            <span className="link-text logo-text">FlashMaster</span>
            <FontAwesomeIcon
              className="nav-icon logo-icon"
              icon="angle-double-left"
            />
          </NavLink>
        </li>
        {links.map((link) => (
          <li key={link.path} class="nav-item">
            <NavLink className="nav-link" to={link.path}>
              <FontAwesomeIcon class="nav-icon" icon={link.icon} />
              <span className="link-text">{link.text}</span>
            </NavLink>
          </li>
        ))}
        <li className="nav-item">
          {!user ? (
            <NavLink className="nav-link" to="/login">
              <FontAwesomeIcon className="nav-icon" icon="user" />
              <span className="link-text">Login</span>
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/logout">
              <FontAwesomeIcon className="nav-icon" icon="power-off" />
              <span className="link-text">Logout</span>
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
