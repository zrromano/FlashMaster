import React from "react";
import Flashcard from "./flashcard";

const Home = () => {
  return (
    <Flashcard
      className="flashcard"
      width={30}
      frontHTML={
        <p>
          Welcome to Flash Master!
          <br />
          <br />
          Click the button on the bottom to flip.
          <br />
          <br />
          <br />
          After reading the back, login and go the the Flashcards tab to get
          started!
        </p>
      }
      backHTML={
        <p>
          To use a flashcard, type your answer into the input field on the
          front. <br />
          <br />
          If your answer matches the back of the card, the back will turn green!
          <br />
          <br /> If it doesn't, the back will turn red...
          <br />
          <br /> Try typing "OK" on the front and flipping the card!
        </p>
      }
      back="OK"
    />
  );
};

export default Home;
