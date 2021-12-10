import React, {useContext, useEffect, useState} from "react";
import { BookContext } from "../utils/store";
import BookList from "./BookList"
import Navigation from "./Navigation";
import { stored } from "../model/navArray";
import { useParams } from "react-router";
const StorageContainer = () =>{
    // const [stored] = useState([]) 
    const [storedBook, setStoredbook] = useState([])
    const value = useContext(BookContext)
 
   
 
    const getBooksFromStorage = () =>{
     
        return setStoredbook(JSON.parse(localStorage.getItem("Want-to-Read")));
          
};


useEffect(()=>{
     getBooksFromStorage(); 
},[]);

return(
    <div>

         <Navigation/> 
         <div>
         {storedBook && ( 
        <div>
            {storedBook.map((item)=>{
                
                    return (
                        <div>
                         <BookList 
                             info={item.book} 
                             Author = {value.authorOrCategory}
                             />             
                         </div> 
                        )
               
               
})} 
        </div>
     )} 
     
    </div>
    </div>
)
}

export default StorageContainer;