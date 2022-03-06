import { useContext, useEffect } from "react";
import Books from "./Books";
import Navigation from "./Navigation";
import { bookCategory } from "../model/array";
import { BookContext } from "../utils/store";
import { useParams } from "react-router";

const Category = () => {
  const value = useContext(BookContext);

  const param = useParams();

  useEffect(() => {
    const isCategory = () => {
      bookCategory.filter((item) => {
        if (param.category === item) {
          return value.categoryResult("subject", item);
        }
        return item;
      });
    };
    isCategory();
  }, [param, value]);

  return (
    <>
      <Navigation />
      <div>
        {value.category && (
          <div className="book-container">
            {value.category.map((item, index) => {
              return (
                <div key={index}>
                  <Books info={item} bookStatus={value.bookStatus} />
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
