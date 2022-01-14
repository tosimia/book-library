import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../utils/store";
import StorageBooks from "./StorageBooks";
import Navigation from "./Navigation";
import { useParams } from "react-router";
import "./homePage.css";
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

  return (
    <div>
      <Navigation />
      <div>
        {storedBook && (
          <div className="book-container">
            {storedBook.map((item) => {
              return (
                <div>
                  <StorageBooks info={item.book} author={value.author} param = {param} addToStorage = {value.addToStorage}/>
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
