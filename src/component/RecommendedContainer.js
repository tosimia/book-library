import React, { useContext } from "react";
import { BookContext } from "../utils/store";
import Books from "./Books";

import Carousel from "react-elastic-carousel";
const RecommendedContainer = () => {
  const value = useContext(BookContext);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 100, itemsToShow: 1 },
    { width: 768, itemsToShow: 3 },
  ];

  return (
    <div>
      {value.recommended && (
        <div>
          <Carousel breakPoints={breakPoints}>
            {value.recommended.map((item, index) => {
              return (
                <div key={index}>
                  <Books info={item} bookStatus={value.bookStatus} />
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
