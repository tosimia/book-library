import React, {useContext, useEffect} from "react";
import { BookContext } from "../utils/store";

import Navigation from "./Navigation";
const stored = ["Read, Currently Reading, Want to read"];
const StorageContainer = () =>{
  const value = useContext(BookContext)

useEffect(()=>{
    value.getBooksFromStorage();
    
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
                    AddToStorage={value.AddToStorage}/>             
                </div>
            ))}
        </div>
    )}</div>
    </div>
)
}

export default StorageContainer;