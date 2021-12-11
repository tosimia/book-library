import { useState, useContext } from "react";
import {  getSearch} from "../services";
import { BookContext } from "../utils/store";

const Search = () => {
    let value = useContext(BookContext)
     //the query for search api is key word
  const [keyword, setKeyword] = useState("");
  const [searchType, setSearchType] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault();
   searchedTypes(keyword, searchType)
}

       
    const searchedTypes = async (search, term) =>{ 
  
        switch (term){
            case term= "intitle":
                searchedBooks(search, term)               
                break;
            case term = "inauthor":
                searchedBooks(search, term)                
                break;
            case term = "subject":
                searchedBooks(search,term)               
                break;
            case term = "inpublisher":
                searchedBooks(search, term)
                break
            default:
                return ""

        }
    }

    const searchedBooks = async (search,item) =>{
        const response = await getSearch(search,item);
        if (response){
            value.setBook(response.data.items)
        }
    }
          
    return(
        <div>
            
            <form onSubmit={handleSubmit}>
            <p>Search books by Author, subject, ...</p>
            <input
                placeholder="Search.."
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
                    <option>Search By</option>
                    <option value="intitle">Title</option>
                    <option value="inauthor">Author</option>
                    <option value="subject">Subject</option>
                    <option value="inpublisher">Publisher</option> 
                </select>

          <input
            className="rounded p-2 shadow-sm text-white bg-pink-900"
            type="submit"
            value="submit"
          />
            </div>
            </form>
        </div>
    )
}
export default Search;