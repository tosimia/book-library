import { Link } from "react-router-dom";
import "./book.css";

const Books = ({ info, bookStatus }) => {
  return (
    <div className="card">
      <div>
        <img src={info.image} alt={info.title} className="re-img" />
      </div>

      <div className="book-text">
        <Link to={`/book/${info.id}`} state={{ data: info }}>
          <h2 className="capitalize">{info.title}</h2>
          <h3 className="capitalize">
            {typeof info.author === "object"
              ? info.author.join(", ")
              : info.author}
          </h3>
        </Link>
        <>{bookStatus(info)}</>
      </div>
    </div>
  );
};
export default Books;
