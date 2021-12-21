import { Link } from "react-router-dom";
import "./book.css";
import "./recommended.css";
const Recommended = ({ info, addToStorage }) => {
  return (
    <div className="card">
      <div>
        <img src={info.image} className="re-img" />
      </div>

      <div className="book-text">
        <Link to={`/book/${info.id}`} state={{ data: info }}>
          <h2>{info.title}</h2>
          <h3>{info.author}</h3>
        </Link>

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
  );
};
export default Recommended;
