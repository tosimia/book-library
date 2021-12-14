import React, { useContext } from "react";
import { BookContext } from "../utils/store";
import { Link } from "react-router-dom";
import { bookCategory, author, recommended } from "../model/array";
import Books from "./Books";
import Navigation from "./Navigation";
import Search from "./Search";
import Category from "./Category";
import "./homePage.css";
const HomePage = () => {
  const value = useContext(BookContext);

  return (
    <div className="grid-container">
      <div>
        <div>
          <Search />
        </div>
        <div>
          <h1>Recommended</h1>
          <div>
            <Category />
          </div>
        </div>

        <div>
        <div>
          <h1>All Books</h1>
        </div>
        <div>
          {value.book && (
            <div>
              {value.book.map((item) => (
                <div>
                  <Books
                    info={item}
                    AddToStorage={value.AddToStorage}
                    Author={value.authorOrCategory}
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
          <div>
            <h2>Bookshelves</h2>
            <Navigation />
          </div>
        </div>
        <div>
          <h1>Top Authors</h1>
          <div>
            {author && (
              <div>
                {author.map((item, index) => (
                  <div key={index}>
                    <img src={item.image} />
                    <p> {item.author}</p>
                    <p>{item.book}</p>
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
          <div>
            {bookCategory.map((item, index) => (
              <div>
                <button>
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
  );
};

export default HomePage;
