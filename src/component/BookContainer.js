import React, {useContext} from "react";
import { BookContext } from "../utils/store";
import { Link } from "react-router-dom";
import { bookCategory } from "../model/array"
import HomePage from "./HomePage";
 import Navigation from "./Navigation";
import Search from "./Search";

const BookContainer = () =>{
    const value = useContext(BookContext)


return(
    <div>
         <Navigation/>

        <div>
         <Search/> 
    <div>{value.book && (
        <div>
            {value.book.map((item)=>(
                <div>
                <HomePage 
                    info={item} 
                    AddToStorage={value.AddToStorage}
                    Author = {value.authorOrCategory}
                    />             
                </div>
            ))}
        </div>
    )}</div>
    </div>
    <div>
        <div>
        <h1>Genres</h1>
        </div>
        {bookCategory && (
            <div>
                {
                    bookCategory.map((item, index)=>(
                        <div>
                            
                            <button>
                            <Link key={index} to={`/category/${item}`}>
                            {item}
                            </Link>
                            </button>
                        </div>
                    ))
                }
            </div>
        )
        }
    </div>
    </div>
)
}

export default BookContainer;