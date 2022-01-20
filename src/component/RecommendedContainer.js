import React, { useContext } from "react";
import { BookContext } from "../utils/store";
import Recommended from "./Recommended";
import "./homePage.css";
import "./recommended.css";
import Carousel from "react-elastic-carousel";
const RecommendedContainer = () => {
  const value = useContext(BookContext);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 100, itemsToShow: 3, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
  ];

  return (
    <div >
      {value.recommended && (
        <div>
          <Carousel breakPoints={breakPoints}>
            {value.recommended.map((item) => {
              return (
                <div>
                  <Recommended info={item} addToStorage={value.addToStorage} />
                </div>
              );
            })}
          </Carousel>
        </div>
      )}
    </div>
  );
};
export default RecommendedContainer;
