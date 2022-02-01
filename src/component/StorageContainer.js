import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../utils/store";
import Books from "./Books";
import Navigation from "./Navigation";
import { useParams } from "react-router";

const StorageContainer = () => {
  const [storedBook, setStoredbook] = useState([]);
  const value = useContext(BookContext);
  const param = useParams();

  const getBooksFromStorage = () => {
    if (param.slug === "Read") {
      return setStoredbook(JSON.parse(localStorage.getItem("Read")));
    } else if (param.slug === "Want-to-Read") {
      return setStoredbook(JSON.parse(localStorage.getItem("Want-to-Read")));
    } else if (param.slug === "Currently-Reading") {
      return setStoredbook(
        JSON.parse(localStorage.getItem("Currently-Reading"))
      );
    }
  };

  useEffect(() => {
    getBooksFromStorage();
  }, []);

  const allBooksArray = [value.recommended, value.currentBook, value.category];

  return (
    <div>
    <Navigation />
    <div>
      {storedBook && (
        <div className="book-container">
          {storedBook.map((item, index) => {
            return (
              <div key={index}>
                 <Books
                info={item.book}
                bookStatus={value.bookStatus}
                /> 
                
              </div>
            );
          })}
        </div>
      )}
    </div>
  </div>
  );
};

export default StorageContainer;
