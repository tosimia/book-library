import { useLocation } from "react-router";
import { BookContext } from "../utils/store";
import { useContext, useState } from "react";
import Navigation from "./Navigation";
import "./book.css";
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
    const text = info.volumeInfo.description;
    if (!text) return "";
    if (text.length < 250) {
      return <p>{text}</p>;
    } else {
      return (
        <div>
          {/*if showMore is true, it will show the text. If showMore is false, only 250 characters will be shown */}
          <p>
            {showMore ? text : `${text.substring(0, 250)}`}
            <button onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show less" : "Show more"}
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
        <img src={info.volumeInfo.imageLinks.smallThumbnail} />
        <h2>{info.volumeInfo.title}</h2>
        <h3>{value.authorOrCategory(info.volumeInfo.authors)}</h3>
        <p>{value.authorOrCategory(info.volumeInfo.categories)}</p>
        <>{description()}</>
        {/* <p>{info.searchInfo.textSnippet}</p>  */}
        <p>{info.categories}</p>
        <a href={info.accessInfo.pdf.acsTokenLink}>Download pdf</a>
        <a href={info.volumeInfo.infoLink}>Google link</a>
        <button
          onClick={() => {
            value.AddToStorage(info, "Currently-Reading");
          }}
        >
          Currently Reading
        </button>
        <button
          onClick={() => {
            value.AddToStorage(info, 1, "Read");
          }}
        >
          Read
        </button>
        <button
          onClick={() => {
            value.AddToStorage(info, 1, "Want-to-Read");
          }}
        >
          Want to read
        </button>
      </div>
      
    </div>
  );
};
export default DisplayOnlyOneItem;
