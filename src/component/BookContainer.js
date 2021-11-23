import React, {useContext, useEffect} from "react";
import { BookContext } from "../utils/store";
import HomePage from "./HomePage";

const BookContainer = () =>{
  const value = useContext(BookContext)

useEffect(()=>{
    value.bookFunc()
},[]);
return(
    <div>{value.book && (
        <div>
            {value.book.map((item)=>(
                <HomePage info={item} AddToStorage={value.AddToStorage}/>
            ))}
        </div>
    )}</div>
)
}

export default BookContainer;