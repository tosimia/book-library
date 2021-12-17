import React, { useContext } from "react";
import { BookContext } from "../utils/store";
import { Link } from "react-router-dom";
import { bookCategory, author}from "../model/array";
import Books from "./Books";
import Navigation from "./Navigation";
import Search from "./Search";
import BookPagination from "./Pagination";
import "./homePage.css";
import "./book.css";
import RecommendedContainer from "./RecommendedContainer";

const HomePage = () => {
  const value = useContext(BookContext);

  return (
    <>
      <div className="grid-container">
        <div>
          <div>
            <Search />
          </div>
          <div>
            <h1>Recommended</h1>
            <div>
              <RecommendedContainer />
            </div>
          </div>

          <div>
            <div>
              <h1>All Books</h1>
            </div>
            <div>
              {value.currentBook && (
                <div className="book-container">
                  {value.currentBook.map((item) => (
                    <div>
                      <Books
                        info={item}
                        AddToStorage={value.AddToStorage}
                        author={value.author}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <div>
            <div className="author-text">
              <h2>Bookshelves</h2>
              <Navigation />
            </div>
          </div>
          <div>
            <h1>Top Authors</h1>
            <div>
              {author && (
                <div className="author-container">
                  {author.map((item, index) => (
                    <div key={index} className="bk-container">
                      <div>
                        <img
                          src={item.image}
                          alt={item.author}
                          className="author-img"
                        />
                      </div>

                      <div className="author-text">
                        <h4> {item.author}</h4>
                        <p>{item.book}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <div>
              <h1>Genres</h1>
            </div>
            {bookCategory && (
              <div className="book-container">
                {bookCategory.map((item, index) => (
                  <div>
                    <button className="genre-btn">
                      <Link key={index} to={`/category/${item}`}>
                        {item}
                      </Link>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <BookPagination />
    </>
  );
};

export default HomePage;
