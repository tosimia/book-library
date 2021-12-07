import { useState, useContext } from "react";
import {  getBook} from "../../services";
import { BookContext } from "../utils/store";

const Search = () => {
    let value = useContext(BookContext)
     //the query for search api is key word
  const [keyword, setKeyword] = useState("");

    const searchedTypes = async (value = "intitle") =>{   
        switch (value){
            case value = "inauthor":
                searchedBooks(value)
                console.log(value)
                break;
            case value = "subject":
                searchedBooks(value)
                console.log(value)
                break;
                case value = "ispublisher":
                    console.log(value)
                break
            default:
                console.log("default is working")

        }
    }

    const searchedBooks = async (item) =>{
        const response = await getBook(item);
        if (response){
            value.setBook(response.data.items)
        }
    }
    return(
        <div>

        </div>
    )
}
export default Search;