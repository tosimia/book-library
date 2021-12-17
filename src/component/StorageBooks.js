import "./book.css";

const BookList = ({ info, Author }) => {
  return (
    <div className="bk-container">
      <div>
        <img src={info.volumeInfo.imageLinks.thumbnail} />
      </div>
      <div className="book-text">
        <h2>{info.volumeInfo.title}</h2>
        <h3>{Author(info.volumeInfo.authors)}</h3>
        <p>rating</p>
        <p>review</p>
      </div>
    </div>
  );
};
export default BookList;
