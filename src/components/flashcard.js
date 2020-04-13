import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import "../flashcard.css";

class Flashcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
      answer: "",
      color: "white",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ answer: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    let state = { ...this.state };

    if (state.answer.toLowerCase() === this.props.back.toLowerCase())
      state.color = "#90EE90";
    else state.color = "#F08080";

    this.setState((prevState) => ({
      isFlipped: !prevState.isFlipped,
      color: state.color,
    }));
  }

  render() {
    const { front, back, width } = this.props;
    return (
      <ReactCardFlip
        isFlipped={this.state.isFlipped}
        flipSpeedBackToFront={1}
        flipSpeedFrontToBack={1}
        flipDirection="vertical"
      >
        <div
          id="front"
          class="card"
          style={{ width: `${width}rem`, height: `${width * (4 / 3)}rem` }}
        >
          <div className="container">
            <div
              className="flashcard-text"
              style={{ width: `${width - 1}rem`, height: `${width - 1}rem` }}
            >
              {this.props.frontHTML ? this.props.frontHTML : <p>{front}</p>}
            </div>
            <div
              className="flashcard-submit"
              style={{
                width: `${width - 1}rem`,
                height: `${width * (4 / 3) - width - 1}`,
              }}
            >
              <input
                type="text"
                value={this.state.answer}
                onChange={this.handleChange}
              ></input>
              <br />
              <br />
              <button onClick={this.handleClick}>Click to flip</button>
            </div>
          </div>
        </div>

        <div
          ref={this.back}
          class="card"
          style={{ width: `${width}rem`, height: `${width * (4 / 3)}rem` }}
        >
          <div className="container">
            <div
              className="flashcard-text"
              style={{
                backgroundColor: this.state.color,
                width: `${width - 1}rem`,
                height: `${width - 1}rem`,
              }}
            >
              {this.props.backHTML ? this.props.backHTML : <p>{back}</p>}
            </div>
            <div
              className="flashcard-submit"
              style={{
                width: `${width - 1}rem`,
                height: `${width * (4 / 3) - width - 1}`,
              }}
            >
              <input
                type="text"
                value={this.state.answer}
                onChange={this.handleChange}
                disabled
              ></input>
              <br />
              <br />
              <button onClick={this.handleClick}>Click to flip</button>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    );
  }
}

export default Flashcard;
