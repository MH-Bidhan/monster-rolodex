import React from "react";
import Card from "./../components/card/card.component";
import MonsterGrid from "./../components/monster-grid/monster-grid.component";
import Pagination from "./../components/pagination/pagination.component";
import monstersData from "./../data/data";
import paginate from "./../functions/paginate";
import "./monster-rolodex.styles.scss";

class MonsterRolodex extends React.Component {
  constructor() {
    super();

    this.state = {
      monsterList: [...monstersData],
      currentPage: 1,
      itemsPerPage: 8,
    };
  }

  handleDelete = (monster) => {
    const data = [...this.state.monsterList];
    const monsterList = data.filter((m) => m.id !== monster.id);

    this.setState({ monsterList });
  };

  handlePageChange = (page) => {
    const currentPage = page;

    this.setState({ currentPage });
  };

  render() {
    const { monsterList, currentPage, itemsPerPage } = this.state;
    const paginated = paginate(monsterList, currentPage, itemsPerPage);
    return (
      <div className="home">
        <div className="container">
          <h1 className="logo">Monster Rolodex</h1>
          <MonsterGrid>
            {paginated.map((m) => (
              <Card
                key={m.id}
                content={m}
                onDelete={() => this.handleDelete(m)}
              />
            ))}
          </MonsterGrid>
          <Pagination
            currentPage={currentPage}
            numberOfItems={monsterList.length}
            itemsPerPage={itemsPerPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default MonsterRolodex;
