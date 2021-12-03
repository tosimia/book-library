

const BookList = ({info, Author}) =>{
    
    return(
        <div>
            <img src={info.volumeInfo.imageLinks.smallThumbnail}/>
            <h2>{info.volumeInfo.title}</h2>
            <h3>{Author(info) }</h3>  
            <p>rating</p>
            <p>review</p>
        </div>
    )
};
export default BookList;
