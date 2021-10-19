import React from "react";
import { Link } from "react-router-dom";
import Button from "./../button/button.component";
import "./card.styles.scss";

const Card = ({ content, onDelete }) => {
  return (
    <div className="card">
      <Link to={`monster/${content.id}`}>
        <img className="card-image" src={content.imageUrl} alt="" />
        <div className="card-body">
          <h2 className="card-title">{content.name}</h2>
          <p className="card-subtitle">{content.catchPhrase}</p>
        </div>
      </Link>
      <Button
        handleEvent={() => onDelete()}
        buttonSize="btn-sm"
        buttonStatus="btn-danger"
        name="Delete"
      />
    </div>
  );
};

export default Card;
