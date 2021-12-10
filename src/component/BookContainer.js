import React, {useContext} from "react";
import { BookContext } from "../utils/store";

import HomePage from "./HomePage";
 import Navigation from "./Navigation";
import Search from "./Search";

const BookContainer = () =>{
    const value = useContext(BookContext)


return(
    <div>
         <Navigation/>
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
)
}

export default BookContainer;