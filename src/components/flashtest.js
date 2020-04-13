import React, { Component } from "react";
import Flashcard from "./flashcard";
import "../flashtest.css";

class FlashTest extends Component {
  state = {};

  constructor(props) {
    super(props);
    const { title, cards } = this.props.location.state;
    this.state = { title, cards };
  }

  render() {
    const { title, cards } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <div className="test-container">
          {cards.map(card => (
            <Flashcard
              className="flashcard"
              key={card.front}
              front={card.front}
              back={card.back}
              width={18}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default FlashTest;
