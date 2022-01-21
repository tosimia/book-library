import { useState, useContext } from "react";
import { getSearch, getBook } from "../services";
import { BookContext } from "../utils/store";
import { BsSearch } from "react-icons/bs";
import "./search.css";
const Search = () => {
  let value = useContext(BookContext);
  //the query for search api is key word
  const [keyword, setKeyword] = useState("");
  const [searchType, setSearchType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchedTypes(keyword, searchType);
  };

  const searchedTypes = async (search, term) => {
    switch (term) {
      case (term = "intitle"):
        searchedBooks(search, term);
        break;
      case (term = "inauthor"):
        searchedBooks(search, term);
        break;
      case (term = "subject"):
        searchedBooks(search, term);
        break;
      case (term = "inpublisher"):
        searchedBooks(search, term);
        break;
      case (term = "all"):
        findBooks(search);
        break;
      default:
        return "";
    }
  };

  const searchedBooks = async (search, item) => {
    const response = await getSearch(search, item);

    if (response) {
      value.setBook(response.data.items);
    }
  };

  const findBooks = async (search) => {
    const response = await getBook(search);
    if (response) {
      value.setBook(response.data.items);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <button className="search-btn" type="submit" value="submit">
          <BsSearch className="search-icon" />
        </button>
        <input
          placeholder="Search by Books, Author ..."
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <div>
          <div
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          >
            <input type="radio" value="all" name="input" />
            <label htmlFor="all">All</label>

            <input type="radio" value="intitle" name="input" />
            <label htmlFor="intitle">Title</label>

            <input type="radio" value="inauthor" name="input" />
            <label htmlFor="inauthor">Author</label>

            <input type="radio" value="subject" name="input" />
            <label htmlFor="subject">Subject</label>

            <input type="radio" value="inpublisher" name="input" />
            <label htmlFor="inpublisher">Publisher</label>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Search;
