import React from "react";
import Card from "./../components/card/card.component";
import MonsterGrid from "./../components/monster-grid/monster-grid.component";
import Pagination from "./../components/pagination/pagination.component";
import SearchBox from "./../components/search-box/search-box.component";
import monstersData from "./../data/data";
import paginate from "./../functions/paginate";
import "./monster-rolodex.styles.scss";

class MonsterRolodex extends React.Component {
  constructor() {
    super();

    this.state = {
      monsterList: [...monstersData],
      searchFeild: "",
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

  onSearch = (e) => {
    const searchFeild = e.target.value.toLowerCase();

    this.setState({ searchFeild });
  };

  render() {
    const { monsterList, currentPage, itemsPerPage, searchFeild } = this.state;
    const filtered = monsterList.filter((m) =>
      m.name.toLowerCase().includes(searchFeild)
    );
    const paginated = paginate(filtered, currentPage, itemsPerPage);
    return (
      <div className="home">
        <div className="container">
          <h1 className="logo">Monster Rolodex</h1>
          <SearchBox onChange={this.onSearch} />
          {monsterList.length === 0 ? (
            <p>No monster left in the database</p>
          ) : null}
          {filtered.length === 0 ? <p>No match</p> : null}
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
            numberOfItems={filtered.length}
            itemsPerPage={itemsPerPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default MonsterRolodex;
