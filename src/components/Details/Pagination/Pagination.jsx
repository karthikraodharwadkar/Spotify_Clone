import React from "react";
import "./Pagination.css";
import PaginationLeftArrow from "../../../assest/paginationleftarrow.svg";
import PaginationRightArrow from "../../../assest/paginationrightarrow.svg";

export default function Pagination({
  currentPage,
  setCurrentPage,
  itemsPerPage,
  totalPages,
}) {
  const totalPaginationPages = (totalPages) => {
    let pages = [];
    for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
      pages.push(currentPage);
    }
    return pages;
  };

  const paginationPages = totalPaginationPages(totalPages);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleCurrentPage = (item) => {
    setCurrentPage(item);
  };

  return (
    <div className="pagination-container">
      <p className="pagination-prev-btn" onClick={handlePrevPage}>
        <img src={PaginationLeftArrow} alt="PaginationLeftArrow" />
      </p>
      {paginationPages.map((item, index) => {
        return (
          <p
            className="pagination-btns"
            key={index}
            onClick={() => handleCurrentPage(item)}
            id={index === currentPage - 1 ? "active-page" : ""}
          >
            {item}
          </p>
        );
      })}
      <p className="pagination-next-btn" onClick={handleNextPage}>
        <img src={PaginationRightArrow} alt="PaginationRightArrow" />
      </p>
    </div>
  );
}
