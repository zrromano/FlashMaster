import React from "react";
import "../flashcard.css";
import { Link } from "react-router-dom";

const Card = ({ title, cards }) => {
  console.log(title + " " + JSON.stringify(cards));
  return (
    <Link to={{ pathname: `/flashtest`, state: { title, cards } }} class="card">
      <div
        className="flashcard-text"
        style={{ width: "18rem", height: "24rem" }}
      >
        {title}
      </div>
    </Link>
  );
};

export default Card;
