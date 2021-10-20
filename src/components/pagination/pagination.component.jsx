import React from "react";
import arrayRange from "./../../functions/arrayRange";
import "./pagination.styles.scss";

const Pagination = ({
  numberOfItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const numberOfPages = Math.ceil(numberOfItems / itemsPerPage);
  const pages = arrayRange(numberOfPages);
  return (
    <div className="pagination">
      {pages.map((p) => {
        return (
          <div
            key={p}
            onClick={() => onPageChange(p)}
            className={p === currentPage ? "page-link active" : "page-link"}
          >
            {p}
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
