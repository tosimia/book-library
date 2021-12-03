

const BookList = ({info, Author}) =>{
    console.log(info)
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
