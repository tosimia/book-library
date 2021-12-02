import React, {useContext, useEffect, useState} from "react";
import { BookContext } from "../utils/store";
import CurrentlyReading from "./CurrentlyReading"
import Navigation from "./Navigation";

const stored = ["Read", "Currently Reading", "Want to read"];
const StorageContainer = () =>{
    const [storedBook, setStoredbook] = useState([])
//   const value = useContext(BookContext)

  
  
  
  const getBooksFromStorage = (storageName) =>{
    setStoredbook(JSON.parse(localStorage.getItem(storageName)));
};


useEffect(()=>{
     getBooksFromStorage(stored[1]);
     
    
},[]);

return(
    <div>

         <Navigation/> 
    <div>
        {storedBook && ( 
        <div>
            {storedBook.map((item)=>(
                <div>
                <CurrentlyReading 
                    info={item.book} 
                    //  AddToStorage={value.AddToStorage}
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