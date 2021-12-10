import { Link } from "react-router-dom";

const HomePage =({info, Author, AddToStorage})=>{
    
    
    return(
        <div>
            <Link
                to={`/book/${info.id}`}
                 state = {{data: info}}>
                <img src={info.volumeInfo.imageLinks.smallThumbnail}/>
                <h2>{info.volumeInfo.title}</h2>
                 <h3>{Author(info.volumeInfo.authors) }</h3> 
                 {/* categories */}
                <h3>{Author(info.volumeInfo.categories) }</h3>       
            </Link>
                <div>
                    <button 
                    onClick={()=>{
                        AddToStorage(info, 1,"Currently-Reading")
                    }}
                    >Currently Reading</button>
                    <button
                    onClick={()=>{
                        AddToStorage(info, 1, "Read")
                    }}
                    >Read</button>
                    <button
                    onClick={()=>{
                        AddToStorage(info, 1, "Want-to-Read")
                    }}
                    >Want to read</button>   
                </div>
            </div>
    )
    };
    export default HomePage;