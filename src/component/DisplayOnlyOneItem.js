import { useLocation} from "react-router";
import { BookContext } from "../utils/store";
import { useContext,useState} from "react";
import Navigation from "./Navigation";
const DisplayOnlyOneItem = () =>{
    const [showMore, setShowMore] = useState(false);
    const value = useContext(BookContext)

    let location = useLocation();
    let info;
    // redirect to home page when state is undefined
        if (location.state === undefined) {
            window.location.replace("/");
        } else {
            info = location.state.data;
        }
console.log(value.book.categories)
    const getText = () =>{
        const text = info.volumeInfo.description 
        if(!text) return ""
        //if text is shorter than desired length
        if(text.length <= 258) return <p>{text}</p>;

        //if text is longer than desired length & showMore is true
        if(text > 258 && showMore){
            return(
                <>
                    <p>{text}</p>
                    <button
                        onClick={() => setShowMore(false)}>
                        Show less
                    </button>
                </>
            );
        };

        // if text is longer than desired length & showMore is false
        if(text.length > 258){
            return(
                <>
                <p>{text.slice(0,258)}</p>
                <button onClick={()=> setShowMore(true)}>
                    Show full description
                </button>
                </>
            )
        }
    }

    return(
        <div>
            <Navigation/>
        <div key={location.key}>
            <img src={info.volumeInfo.imageLinks.smallThumbnail}/>
                <h2>{info.volumeInfo.title}</h2>
                 <h3>{value.Author(info) }</h3>  
                 {/* <p>{info.volumeInfo.description}</p>  */}
                 <div>{getText()}</div>
                 {/* <p>{info.searchInfo.textSnippet}</p> */}
                 <p>{info.categories}</p>
                <a href={info.accessInfo.pdf.acsTokenLink}>Download pdf</a>
                <a href={info.volumeInfo.infoLink}>Google link</a> 
                <button 
                onClick={()=>{
                    value.AddToStorage(info, "Currently-Reading")
                }}
                >Currently Reading</button>
                <button
                onClick={()=>{
                    value.AddToStorage(info, 1, "Read")
                }}
                >Read</button>
                <button
                onClick={()=>{
                    value.AddToStorage(info, 1, "Want-to-Read")
                }}
                >Want to read</button>
        </div>
        </div>
    )
}
export default DisplayOnlyOneItem;