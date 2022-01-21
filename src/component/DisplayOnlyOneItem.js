import { useLocation } from "react-router";
import { BookContext } from "../utils/store";
import { useContext, useState } from "react";
import Navigation from "./Navigation";
import "./book.css";
import "./homePage.css";
const DisplayOnlyOneItem = () => {
  const [showMore, setShowMore] = useState(false);
  const value = useContext(BookContext);

  let location = useLocation();
  let info;
  // redirect to home page when state is undefined
  if (location.state === undefined) {
    window.location.replace("/");
  } else {
    info = location.state.data;
  }

  const description = () => {
    const text = info.description;
    if (!text) return "";
    if (text.length < 250) {
      return <p className="book-description">{text}</p>;
    } else {
      return (
        <div>
          {/*if showMore is true, it will show the text. If showMore is false, only 250 characters will be shown */}
          <p className="book-description">
            {showMore ? text : `${text.substring(0, 250)}`}
            <button
              className="btn-more-less"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "...less" : "...more"}
            </button>
          </p>
        </div>
      );
    }
  };

  return (
    <div>
      <Navigation />

      <div key={location.key} className="only-one-item-container">
        <div>
          <img src={info.image} alt={info.title} />
          <h2 className="capitalize">{info.title}</h2>
          <h3 className="capitalize">
            {typeof info.author === "object"
              ? info.author.join(", ")
              : info.author}
          </h3>
          <>{description()}</>

          <button className="book-btn">
            <a href={info.link} target="_blank" rel="noreferrer">
              Google link
            </a>
          </button>

          <>{value.bookStatus(info)}</>
        </div>
      </div>
    </div>
  );
};
export default DisplayOnlyOneItem;
