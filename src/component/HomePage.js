const HomePage =({info, AddToStorage})=>{
    
 
    
     const Author = () =>{
         if(info.volumeInfo.authors !== undefined){
             if(info.volumeInfo.authors.length >= 1){            
           return info.volumeInfo.authors.map && info.volumeInfo.authors.map((author) => author)
        }
          }
     }
    return(
        <div>
            <img src={info.volumeInfo.imageLinks.smallThumbnail}/>
            <h2>{info.volumeInfo.title}</h2>
            <h3>{Author() }</h3>  
            <p>{info.volumeInfo.description}</p>
            <a href={info.accessInfo.pdf.acsTokenLink}>Download pdf</a>
            <a href={info.volumeInfo.infoLink}>Google link</a>
            <button 
            onClick={()=>{
                AddToStorage(info.id, 1, "Currently Reading")
            }}
            >Currently Reading</button>
            <button
            onClick={()=>{
                AddToStorage(info.id, 1, "Read")
            }}
            >Read</button>
            <button
            onClick={()=>{
                AddToStorage(info.id, 1, "Want to Read")
            }}
            >Want to read</button>
            
        </div>
    )
    };
    export default HomePage;