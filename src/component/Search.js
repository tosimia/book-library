import { useState } from "react";
import {  getBook} from "../../services";
const Search = () => {
     //the query for search api is key word
  const [keyword, setKeyword] = useState("");
    const searchBy = async () =>{
        let value = ""
        switch (value){
            case "intitle":
                break;
            case "inauthor":
                break;
            case "subject":
                break;
                case "ispublisher":
                    break;
        }
        const response = await getBook();
        if (response){
            setBook(response.data.items)
        }
    }
    return(
        <div>

        </div>
    )
}
export default Search;