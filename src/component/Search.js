import { useState, useContext } from "react";
import {  getSearchValue} from "../services";
import { BookContext } from "../utils/store";

const Search = () => {
    let value = useContext(BookContext)
     //the query for search api is key word
  const [keyword, setKeyword] = useState("");
  const [searchClicked, setSearchClicked] = useState("")
  const [searchType, setSearchType] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault();
   searchedTypes(keyword, searchType)
}

const handleSearch = () =>{
 setSearchClicked(!searchType)
}
       
    const searchedTypes = async (search, term) =>{   
        switch (term){
            case term = "intitle":
                searchedBooks(term)
                console.log(search)
                console.log(term)                
                break;
            case term = "inauthor":
                searchedBooks(term)
                console.log(search)
                console.log(term)                 
                break;
            case term = "subject":
                searchedBooks(term)
                console.log(search) 
                console.log(term)                
                break;
                case term = "inpublisher":
                searchedBooks(term)
                console.log(search)
                console.log(term) 
                break
            default:
                console.log("default is working")

        }
    }

    const searchedBooks = async (search,item) =>{
        const response = await getSearchValue(search,item);
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
                    <option>Search</option>
                    <option value="intitle">Title</option>
                    <option value="inauthor">Author</option>
                    <option value="subject">Subject</option>
                    <option value="inpublisher">Publisher</option>
                </select>

          <input
            className="rounded p-2 shadow-sm text-white bg-pink-900"
            type="submit"
            value="submit"
            onClick={handleSearch}
          />
            </div>
            </form>
        </div>
    )
}
export default Search;