import React, {useContext, useEffect} from "react";
import { BookContext } from "../utils/store";
import BookCard from "./BookCard";

const BookContainer = () =>{
  const value = useContext(BookContext)

useEffect(()=>{
    value.bookFunc()
},[]);
return(
    <div>{value.book && (
        <div>
            {value.book.map((item)=>(
                <BookCard info={item}/>
            ))}
        </div>
    )}</div>
)
}

export default BookContainer;