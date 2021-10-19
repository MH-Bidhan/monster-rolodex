import React from "react";
import monstersData from "./../data/data";
import "./monster-rolodex.styles.scss";

class MonsterRolodex extends React.Component {
  constructor() {
    super();

    this.state = {
      monsterList: [...monstersData],
    };
  }

  render() {
    const { monsterList } = this.state;
    return (
      <div className="home">
        <div className="container">
          <h1 className="logo">Monster Rolodex</h1>
          {monsterList.map((m) => (
            <h1>{m.name}</h1>
          ))}
        </div>
      </div>
    );
  }
}

export default MonsterRolodex;
