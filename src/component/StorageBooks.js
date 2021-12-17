import "./book.css";

const StorageBooks = ({ info, author }) => {
  return (
    <div className="bk-container">
      <div>
        <img src={info.image} />
      </div>
      <div className="book-text">
        <h2>{info.title}</h2>
        <h3>{author(info.author)}</h3>
        <h3>{info.author}</h3>
        <p>rating</p>
        <p>review</p>
      </div>
    </div>
  );
};
export default StorageBooks;
