import React, { useState } from "react";
import data from "../model/book.json";
import recommendedBooks from "../model/recommended.js";
export const BookContext = React.createContext();

export default ({ children }) => {
  const [book, setBook] = useState(data);
  const [recommended, setRecommended] = useState(recommendedBooks);
  const [activePage, setCurrentPage] = useState(1);
  const displayedBookPerPage = 6;
  const indexOfLastBook = activePage * displayedBookPerPage;
  const indexOfFirstBook = indexOfLastBook - displayedBookPerPage;
  const currentBook = book.slice(indexOfFirstBook, indexOfLastBook);

  const addToStorage = (book, quantity, storageName) => {
    let storedBook = [];

    if (localStorage.getItem(storageName)) {
      storedBook = JSON.parse(localStorage.getItem(storageName));
    }
    let isAlreadyIn = false;
    let number;

    for (let i = storedBook.length - 1; i >= 0; i--) {
      if (storedBook[i].book.id === book.id) {
        isAlreadyIn = true;
        number = i;
        break;
      }
    }
    if (isAlreadyIn) {
      storedBook[number].quantity = storedBook[number].quantity + quantity;
    } else {
      storedBook.push({
        book: book,
        quantity: quantity,
      });
    }

    localStorage.setItem(storageName, JSON.stringify(storedBook));
  };

  const removeBookFromStorage = (storageName, bookId) => {
    let storedBook = JSON.parse(localStorage.getItem(storageName));
    let removeBook = storedBook.filter((item) => {
      return item.book.id !== bookId.id;
    });

    localStorage.setItem(storageName, JSON.stringify(removeBook));
  };

  const author = (value) => {
    if (value !== undefined) {
      if (value.length >= 1) {
        return value.map && value.map((item) => item);
      } else {
        return value;
      }
    }
  };

  const parseBook = (book) => {
    return book.map((item) => {
      return {
        image:
          item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail,
        author: item.volumeInfo.authors,
        title: item.volumeInfo.title,
        description: item.volumeInfo.description,
        link: item.volumeInfo.infoLink,
      };
    });
  };
  const store = {
    author: author,
    parseBook: parseBook,
    book: parseBook(book),
    addToStorage: addToStorage,
    setBook: setBook,
    currentBook: parseBook(currentBook),
    activePage: activePage,
    setCurrentPage: setCurrentPage,
    recommended: recommended,
    setRecommended: setRecommended,
    removeBookFromStorage: removeBookFromStorage,
  };
  return <BookContext.Provider value={store}>{children}</BookContext.Provider>;
};
