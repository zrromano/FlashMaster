import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import Flashcard from "./flashcard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withFirebase } from "./firebase";
import "../form.css";
import "../flashtest.css";
import "../flashcard.css";

class CreateCollection extends Form {
  state = {
    data: { name: "", count: 0 },
    errors: {},
  };

  schema = {
    name: Joi.string().required(),
    count: Joi.number().required(),
  };

  inc() {
    let state = this.state;
    let schema = this.schema;
    state.data.count++;
    state.data["front" + state.data.count] = "";
    state.data["back" + state.data.count] = "";
    schema["front" + state.data.count] = Joi.string().required();
    schema["back" + state.data.count] = Joi.string().required();
    this.schema = schema;
    this.setState(state);
  }

  dec() {
    let state = this.state;
    if (state.data.count > 0) {
      let schema = this.schema;
      delete state.data["front" + state.data.count];
      delete state.data["back" + state.data.count];
      delete schema["front" + state.data.count];
      delete schema["back" + state.data.count];
      state.data.count--;
      this.setState(state);
    }
  }

  doSubmit() {
    let collection = { name: this.state.data.name, cards: [] };
    for (let i = 1; i <= this.state.data.count; i++) {
      collection.cards.push({
        front: this.state.data["front" + i],
        back: this.state.data["back" + i],
      });
    }
    let id = this.props.user.uid;
    this.props.firebase.createCollection(id, collection.name, collection.cards);
  }

  render = () => {
    let cards = [];
    for (let i = 1; i <= this.state.data.count; i++) {
      cards.push(
        <Flashcard
          key={i}
          className="card"
          width={18}
          frontHTML={
            <div className="form">
              {this.renderInput("front" + i, "Front")}
              {this.renderInput("back" + i, "Back")}
            </div>
          }
          back={this.state.data["back" + i]}
        />
      );
    }
    return (
      <div>
        <h1>Create a new collection:</h1>
        <form onSubmit={this.handleSubmit} className="form">
          {this.renderInput("name", "Name")}
          <div className="countSelect">
            <p>Cards:</p>
            <FontAwesomeIcon
              onClick={() => {
                this.dec();
              }}
              icon="minus"
            />
            <span> {this.state.data.count} </span>
            <FontAwesomeIcon
              onClick={() => {
                this.inc();
              }}
              icon="plus"
            />
          </div>
          <div className="test-container flashtest">{cards}</div>
          {this.renderButton("Create")}
        </form>
      </div>
    );
  };
}

export default withFirebase(CreateCollection);
