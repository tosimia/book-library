import { useState, useContext } from "react";
import { getSearch, getBook } from "../services";
import { BookContext } from "../utils/store";
import { BsSearch } from "react-icons/bs";
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
      <form onSubmit={handleSubmit}>
        <p>Search by Books Title, Author, subject, ...</p>
        <button type="submit" value="submit">
          <BsSearch />
        </button>
        <input
          placeholder="Search.."
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
            <label for="all">All</label>

            <input type="radio" value="intitle" name="input" />
            <label for="intitle">Title</label>

            <input type="radio" value="inauthor" name="input" />
            <label for="inauthor">Author</label>

            <input type="radio" value="subject" name="input" />
            <label for="subject">Subject</label>

            <input type="radio" value="inpublisher" name="input" />
            <label for="inpublisher">Publisher</label>
          </div>

          {/* <input
            className="rounded p-2 shadow-sm text-white bg-pink-900"
            type="submit"
            value="submit"
          /> */}
        </div>
      </form>
    </div>
  );
};
export default Search;
