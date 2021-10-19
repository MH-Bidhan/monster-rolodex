import React from "react";
import Card from "./../components/card/card.component";
import monstersData from "./../data/data";
import "./monster-rolodex.styles.scss";

class MonsterRolodex extends React.Component {
  constructor() {
    super();

    this.state = {
      monsterList: [...monstersData],
    };
  }

  handleDelete = (monster) => {
    const data = [...this.state.monsterList];
    const monsterList = data.filter((m) => m.id !== monster.id);

    this.setState({ monsterList });
  };

  render() {
    const { monsterList } = this.state;
    return (
      <div className="home">
        <div className="container">
          <h1 className="logo">Monster Rolodex</h1>
          {monsterList.map((m) => (
            <Card
              key={m.id}
              content={m}
              onDelete={() => this.handleDelete(m)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MonsterRolodex;
