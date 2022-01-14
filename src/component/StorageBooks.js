import "./book.css";

const StorageBooks = ({ info, author, param, addToStorage }) => {
const removeFromStorage = () =>{
  
}
  const buttons = () =>{
    if (param.slug === "Read"){
      return(
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
              addToStorage(info, 1, "Want-to-Read");
            }}
          >
            Want to read
          </button>
        </div>
      )
    }else if(param.slug === "Want-to-Read"){
      return(
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
      </div>
      )
    }else {
      return(
        <div>
           <button
            className="book-btn"
            onClick={() => {
              addToStorage(info, 1, "Want-to-Read");
            }}
          >
          Want to Read
          </button>

          <button
        className="book-btn"
        onClick={() => {
          addToStorage(info, 1, "Read");
        }}
      >
        Read
      </button>
        </div>
      )
    }
  }
  return (
    <div className="bk-container">
      <div>
        <img src={info.image} />
      </div>
      <div className="book-text">
        <h2>{info.title}</h2>
        <h3>{author(info.author)}</h3>
        <h3>{info.author}</h3>
        <>{buttons()}</>
      </div>
    </div>
  );
};
export default StorageBooks;
