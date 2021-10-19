import React from "react";
import Button from "./../components/button/button.component";
import "./monster-rolodex.styles.scss";

class MonsterRolodex extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <h1 className="logo">Monster Rolodex</h1>
          <Button buttonStatus="btn-danger" />
        </div>
      </div>
    );
  }
}

export default MonsterRolodex;
