import React, { useContext } from "react";
import { BookContext } from "../utils/store";
import Recommended from "./Recommended";
import "./homePage.css";
const RecommendedContainer = () => {
  const value = useContext(BookContext);

  return (
    <div>
      {value.recommended && (
        <div className="book-container">
          {value.recommended.map((item) => {
            return (
              <div>
                <Recommended info={item} addToStorage={value.addToStorage} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default RecommendedContainer;
