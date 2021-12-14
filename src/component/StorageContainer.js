import React, {useContext, useEffect, useState} from "react";
import { BookContext } from "../utils/store";
import BookList from "./BookList"
import Navigation from "./Navigation";
import { stored } from "../model/array";
import { useParams } from "react-router";
const StorageContainer = () =>{
    // const [stored] = useState([])  
    const [storedBook, setStoredbook] = useState([])
    const value = useContext(BookContext)
 const param = useParams()
   console.log(param.slug)
 
    const getBooksFromStorage = () =>{
     if(param.slug === "Read"){
        return setStoredbook(JSON.parse(localStorage.getItem("Read")));
     }if (param.slug === "Want-to-Read"){
        return setStoredbook(JSON.parse(localStorage.getItem("Want-to-Read")));
     }else if(param.slug === "Currently-Reading"){
        return setStoredbook(JSON.parse(localStorage.getItem("Currently-Reading")));
     }
        
          
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