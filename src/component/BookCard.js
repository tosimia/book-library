const BookCard =({info})=>{
    console.log(info)
    return(
        <div>
            <h2>{info.volumeInfo.title}</h2>
            <h3>{info.volumeInfo.authors}</h3>
            <p>{info.volumeInfo.description}</p>
            <a href={info.accessInfo.pdf.acsTokenLink}>Download pdf</a>
            <a href={info.volumeInfo.infoLink}>Google link</a>
            <button>readlist</button>
            <button>readlist</button>
            <img src={info.volumeInfo.imageLinks.smallThumbnail}/>
        </div>
    )
    };
    export default BookCard;