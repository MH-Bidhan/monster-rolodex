import React from "react";
import { Link } from "react-router-dom";
import monstersData from "./../../data/data";
import "./monster-details.styles.scss";

const MonsterDetail = ({ match }) => {
  const data = monstersData;
  const targetMonster = data.find((m) => m.id === match.params.id);
  console.log(targetMonster);
  return (
    <div className="container">
      <div className="monster-detail">
        <img
          className="monster-detail-image"
          src={targetMonster.imageUrl}
          alt=""
        />
        <div className="monster-detail-body">
          <h1 className="monster-title">{targetMonster.name}</h1>
          <p className="monster-description">{targetMonster.description} </p>
          <Link className="btn  " to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MonsterDetail;
