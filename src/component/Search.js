import { useState, useContext } from "react";
import {  getBook} from "../../services";
import { BookContext } from "../utils/store";

const Search = () => {
    let value = useContext(BookContext)
     //the query for search api is key word
  const [keyword, setKeyword] = useState("");
  const [searchClicked, setSearchClicked] = useState("")
  const [searchType, setSearchType] = useState("")

  const handleSubmit = (e)=>{
      e.preventDefault();
      value.searchedTypes(keyword)
  }

  const handleSearch = () =>{
    setSearchClicked(!searchType)
  }
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
                case value = "inpublisher":
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
            
            <form onSubmit={handleSubmit}>
            <p>Search books by Author, subject, ...</p>
            <input
                placeholder="Seatch.."
                type = "text"
                value = {keyword}
                onChange={(e)=>setKeyword(e.target.value)}
            />
            <div>
                <label>Search by</label>
                <select 
                 value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                >
                    <option value="inauthor"></option>
                    <option value="subject"></option>
                    <option value="inpublisher"></option>
                </select>
            </div>
            </form>
        </div>
    )
}
export default Search;