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
    let params = useParams()
    console.log(params)
 
    const getBooksFromStorage = (storageName) =>{
      storageName.map((item) =>{
        return setStoredbook(JSON.parse(localStorage.getItem(storageName)));
       })   
};


useEffect(()=>{
     getBooksFromStorage(stored); 
},[stored]);

return(
    <div>

         <Navigation/> 
         <div>
         {storedBook && ( 
        <div>
            {storedBook.map((item)=>{
                 if(params.slug === stored[0] || params.slug === stored[1] || params.slug === stored[2]){
                    return (
                        <div>
                         <BookList 
                             info={item.book} 
                             Author = {value.Author}
                             />             
                         </div> 
                        )
                 }else{
                     return <div>where are my books?</div>
                 }
               
})} 
        </div>
     )} 
     
    </div>
    </div>
)
}

export default StorageContainer;