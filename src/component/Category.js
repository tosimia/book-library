import { useContext, useEffect, useState } from "react";
import { getCategory } from "../services";
import Books from "./Books";
import Navigation from "./Navigation";
import { bookCategory } from "../model/array";
import { BookContext } from "../utils/store";
import { useParams } from "react-router";
import "./homePage.css";
const Category = () => {
  const value = useContext(BookContext);
  const [category, setCategory] = useState([]);

  const param = useParams();

  const categoryResult = async (term, category) => {
    const response = await getCategory(term, category);
    if (response) {
      const book = value.parseBook(response.data.items);
      setCategory(book);
    }
  };

  const isCategory = () => {
    bookCategory.filter((item) => {
      if (param.category === item) {
        categoryResult("subject", item);
      }
    });
  };

  useEffect(() => {
    isCategory();
  }, []);

  return (
    <>
      <Navigation />
      <div>
        {category && (
          <div className="book-container">
            {category.map((item) => {
              return (
                <div>
                  <Books
                    info={item}
                    addToStorage={value.addToStorage}
                    author={value.author}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
export default Category;
