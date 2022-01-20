import { Link } from "react-router-dom";
import "./book.css";

const Books = ({ info, addToStorage }) => {
  return (
    <div className="bk-container">
      <div>
        <img src={info.image} />
      </div>

      <div className="book-text">
        <Link to={`/book/${info.id}`} state={{ data: info }}>
          <h2>{info.title}</h2>
          <h3 className="capitalize">{info.author.join(", ")}</h3>
        </Link>
        <div>
          <button
            className="book-btn"
            onClick={() => {
              addToStorage(info, 1, "Currently-Reading");
            }}
          >
            Currently Reading
          </button>
          <button
            className="book-btn"
            onClick={() => {
              addToStorage(info, 1, "Read");
            }}
          >
            Read
          </button>
          <button
            className="book-btn"
            onClick={() => {
              addToStorage(info, 1, "Want-to-Read");
            }}
          >
            Want to read
          </button>
        </div>
      </div>
    </div>
  );
};
export default Books;
