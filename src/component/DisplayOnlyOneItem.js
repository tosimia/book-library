import { useLocation} from "react-router";
import { BookContext } from "../utils/store";
import { useContext } from "react";
import Navigation from "./Navigation";
const DisplayOnlyOneItem = () =>{
    const value = useContext(BookContext)

    let location = useLocation();
    let info;
    // redirect to home page when state is undefined
        if (location.state === undefined) {
            window.location.replace("/");
        } else {
            info = location.state.data;
        }

    return(
        <div>
            <Navigation/>
        <div key={location.key}>
            <img src={info.volumeInfo.imageLinks.smallThumbnail}/>
                <h2>{info.volumeInfo.title}</h2>
                 <h3>{value.Author(info) }</h3>  
                 <p>{info.volumeInfo.description}</p>
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