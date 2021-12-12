import React, {useContext} from "react";
import { BookContext } from "../utils/store";
import { Link } from "react-router-dom";
import { bookCategory } from "../model/array"
import Books from "./Books";
 import Navigation from "./Navigation";
import Search from "./Search";

const HomePage = () =>{
    const value = useContext(BookContext)


return(
    <div>
         <Navigation/>

        <div>
         <Search/> 
         <div>
             <h1>All Books</h1>
         </div>
    <div>{value.book && (
        <div>
            {value.book.map((item)=>(
                <div>
                <Books 
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

export default HomePage;