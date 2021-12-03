import React, {useContext, useEffect} from "react";
import { BookContext } from "../utils/store";

import HomePage from "./HomePage";
 import Navigation from "./Navigation";

const BookContainer = () =>{
    const value = useContext(BookContext)

useEffect(()=>{
    value.bookFunc()
    
},[]);
return(
    <div>
         <Navigation/> 
    <div>{value.book && (
        <div>
            {value.book.map((item)=>(
                <div>
                <HomePage 
                    info={item} 
                    AddToStorage={value.AddToStorage}
                    Author = {value.Author}
                    />             
                </div>
            ))}
        </div>
    )}</div>
    </div>
)
}

export default BookContainer;