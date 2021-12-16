import { Link } from "react-router-dom";
import "./book.css"

const Books = ({ info, Author, AddToStorage }) => {
  return (
    <div className="bk-container">
      <div >
        <img src={info.volumeInfo.imageLinks.thumbnail} />
      </div>

      <div className="book-text">
        <Link to={`/book/${info.id}`} state={{ data: info }}>
          <h2>{info.volumeInfo.title}</h2>
          <h3>{Author(info.volumeInfo.authors)}</h3>
          <h3>{Author(info.volumeInfo.categories)}</h3>
        </Link>
        <div>
          <button
          className="book-btn"
            onClick={() => {
              AddToStorage(info, 1, "Currently-Reading");
            }}
          >
            Currently Reading
          </button>
          <button
          className="book-btn"
            onClick={() => {
              AddToStorage(info, 1, "Read");
            }}
          >
            Read
          </button>
          <button
          className="book-btn"
            onClick={() => {
              AddToStorage(info, 1, "Want-to-Read");
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
