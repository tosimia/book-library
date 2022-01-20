import "./book.css";

const StorageBooks = ({ info, author, param, addToStorage, removeBookFromStorage }) => {

  // const buttons = () =>{
  //   if (param.slug === "Read"){
  //     return(
  //       <div>
  //          <button
  //           className="book-btn"
  //           onClick={() => {
  //             addToStorage(info, 1, "Currently-Reading");
  //             removeBookFromStorage("Read", info);
  //           }}
  //         >
  //           Currently Reading
  //         </button>
  //         <button
  //           className="book-btn"
  //           onClick={() => {
  //             addToStorage(info, 1, "Want-to-Read");
  //             removeBookFromStorage("Read", info)
  //           }}
  //         >
  //           Want to read
  //         </button>
  //       </div>
  //     )
  //   }else if(param.slug === "Want-to-Read"){
  //     return(
  //       <div>
  //       <button
  //       className="book-btn"
  //       onClick={() => {
  //         addToStorage(info, 1, "Currently-Reading");
  //         removeBookFromStorage("Want-to-Read", info)
  //       }}
  //     >
  //       Currently Reading
  //     </button>

  //       <button
  //       className="book-btn"
  //       onClick={() => {
  //         addToStorage(info, 1, "Read");
  //         removeBookFromStorage("Want-to-Read", info)
  //       }}
  //     >
  //       Read
  //     </button>
  //     </div>
  //     )
  //   }else if(param.slug === "Currently-Reading"){
  //     return(
  //       <div>
  //          <button
  //           className="book-btn"
  //           onClick={() => {
  //             addToStorage(info, 1, "Want-to-Read");
  //             removeBookFromStorage("Currently-Reading", info)
  //           }}
  //         >
  //         Want to Read
  //         </button>

  //         <button
  //       className="book-btn"
  //       onClick={() => {
  //         addToStorage(info, 1, "Read");
  //         removeBookFromStorage("Currently-Reading", info)
  //       }}
  //     >
  //       Read
  //     </button>
  //       </div>
  //     )
  //   }
  // }
  return (
    <div className="bk-container">
      <div>
        <img src={info.image} />
      </div>
      <div className="book-text">
        <h2>{info.title}</h2>
        <h3>{author(info.author)}</h3>
        <h3>{info.author}</h3>
        <div>
          <button
            className="book-btn"
            onClick={() => {      
              addToStorage(info, 1, "Currently-Reading");
              // removeBookFromStorage("Currently-Reading", info)
               
            }}
          >
            Currently Reading
          </button>
          <button
            className="book-btn"
            onClick={() => {
              
              addToStorage(info, 1, "Read");
              removeBookFromStorage("Read", info)
               
            }}
          >
            Read
          </button>
          <button
            className="book-btn"
            onClick={() => {
              addToStorage(info, 1, "Want-to-Read");
              // removeBookFromStorage("Want-to-Read", info)
            }}
          >
            Want to read
          </button>
        </div>
        {/* <>{buttons()}</> */}
      </div>
    </div>
  );
};
export default StorageBooks;
