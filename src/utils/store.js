import React, { useState } from "react";
import data from "../model/book.json";
import recommendedBooks from "../model/recommended.js";
import { getCategory } from "../services";
export const BookContext = React.createContext();

const Store = ({ children }) => {
  const [book, setBook] = useState(data);
  const [recommended, setRecommended] = useState(recommendedBooks);
  const [activePage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState([]);
  const displayedBookPerPage = 6;
  const indexOfLastBook = activePage * displayedBookPerPage;
  const indexOfFirstBook = indexOfLastBook - displayedBookPerPage;
  const currentBook = book.slice(indexOfFirstBook, indexOfLastBook);

  const addToStorage = (book, quantity, storageName) => {
    let storedBook = [];

    let bookCurrentStorage = getBookStatus(book.id);

    if (bookCurrentStorage) removeBookFromStorage(bookCurrentStorage, book.id);

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

  const getBookStatus = (bookId) => {
    let currentBookState = undefined;
    const bookStates = ["Read", "Currently-Reading", "Want-to-Read"];

    for (const bookStatus of bookStates) {
      if (localStorage.getItem(bookStatus)) {
        const searchedBooks = JSON.parse(localStorage.getItem(bookStatus)).find(
          ({ book }) => book.id === bookId
        );
        if (searchedBooks) currentBookState = bookStatus;
      }
      if (currentBookState) break;
    }
    return currentBookState;
  };
  const removeBookFromStorage = (storageName, bookId) => {
    let storedBook = JSON.parse(localStorage.getItem(storageName));
    let removeBook = storedBook.filter((item) => {
      return item.book.id !== bookId;
    });
    localStorage.setItem(storageName, JSON.stringify(removeBook));
  };
  const categoryResult = async (term, category) => {
    const response = await getCategory(term, category);
    if (response) {
      const book = parseBook(response.data.items);
      setCategory(book);
    }
  };

  const bookStatus = (id) => {
    return (
      <div>
        <button
          className="book-btn"
          onClick={() => {
            addToStorage(id, 1, "Currently-Reading");
          }}
        >
          Currently Reading
        </button>
        <button
          className="book-btn"
          onClick={() => {
            addToStorage(id, 1, "Read");
          }}
        >
          Read
        </button>
        <button
          className="book-btn"
          onClick={() => {
            addToStorage(id, 1, "Want-to-Read");
          }}
        >
          Want to read
        </button>
      </div>
    );
  };

  const parseBook = (book) => {
    return book.map((item) => {
      return {
        image:
          item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail,
        id: item.id,
        author: item.volumeInfo.authors,
        title: item.volumeInfo.title,
        description: item.volumeInfo.description,
        link: item.volumeInfo.infoLink,
      };
    });
  };
  const store = {
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
    bookStatus: bookStatus,
    categoryResult: categoryResult,
    category: category,
    setCategory: setCategory,
  };
  return <BookContext.Provider value={store}>{children}</BookContext.Provider>;
};

export default Store;
