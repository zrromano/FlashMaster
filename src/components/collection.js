import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./card";
import "../collections.css";

class Collection extends Component {
  state = {};
  render() {
    const { user } = this.props;
    return (
      <div className="collections-container">
        {!user && <Redirect to="/login" />}
        <div className="collections-title">
          <div className="create-button">
            <FontAwesomeIcon icon="plus"></FontAwesomeIcon>
            <Link to="/create"> Create a new collection</Link>
          </div>
        </div>
        <div className="collections-grid">
          {user.collections &&
            user.collections.map((collection) => (
              <Card
                className="collection"
                style={{ margin: "0.5rem" }}
                title={collection.title}
                cards={collection.cards}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default Collection;
