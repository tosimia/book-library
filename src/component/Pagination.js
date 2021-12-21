import Pagination from "react-js-pagination";
import { useState, useContext } from "react";
import { BookContext } from "../utils/store";
import "./pagination.css";

const BookPagination = () => {
  const value = useContext(BookContext);

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    value.setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Pagination
        activePage={value.activePage}
        itemsCountPerPage={10}
        totalItemsCount={value.book.length}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        itemClass="page-item"
        linkClass="page-link"
      />
    </div>
  );
};
export default BookPagination;
