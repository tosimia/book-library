import React, {useContext, useEffect, useState} from "react";
import { BookContext } from "../utils/store";
import BookList from "./BookList"
import Navigation from "./Navigation";
import { stored } from "../model/navArray";

const StorageContainer = () =>{
    const [storedBook, setStoredbook] = useState([])
    const value = useContext(BookContext)
    const getCurrentlyReading = (storageName) =>{
        setStoredbook(JSON.parse(localStorage.getItem(storageName)));
    }
    const getBooksFromStorage = (storageName) =>{
     storageName.map((item) =>{
          console.log(item)
        return setStoredbook(JSON.parse(localStorage.getItem(item)));
      })   
};

console.log(storedBook)
useEffect(()=>{
    getCurrentlyReading("Currently-Reading");
    //  getBooksFromStorage(stored); 
},[]);

return(
    <div>

         <Navigation/> 
    <div>
        {storedBook && ( 
        <div>
            {storedBook.map((item)=>(
                <div>
                <BookList 
                    info={item.book} 
                    Author = {value.Author}
                    />             
                </div> 
            ))} 
        </div>
     )} 
    </div>
    </div>
)
}

export default StorageContainer;