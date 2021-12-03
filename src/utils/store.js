import React, {useState} from "react";
import {  getBook} from "../services";
export const BookContext = React.createContext();

export default ({children}) =>{
    const [book, setBook] = useState([])
    

const bookData = async () =>{
    const response = await getBook();
    if (response){
        setBook(response.data.items)
    }
}
const AddToStorage = (book,quantity, storageName)=>{
    
   let StoredBookId = [];
   let isAlreadyIn = false;
   let number;
   if (localStorage.getItem(storageName)){
       StoredBookId = JSON.parse(localStorage.getItem(storageName))
   }

   for(let i = StoredBookId.length -1; i >=0; i--){
       if(StoredBookId[i].id === book.id){
           isAlreadyIn = true;
           number = i;
           break;
       }
   }
   if(isAlreadyIn){
    return ""

   }else{
       StoredBookId.push({
           book: book,
       });
   }
   localStorage.setItem(storageName, JSON.stringify(StoredBookId));
};

const Author = (info) =>{
    if(info.volumeInfo.authors !== undefined){
        if(info.volumeInfo.authors.length >= 1){            
      return info.volumeInfo.authors.map && info.volumeInfo.authors.map((author) => author)
   }
     }
}

const store = {
    bookFunc: bookData,
    book: book,
    AddToStorage: AddToStorage,
    Author: Author
   

};
return(
<BookContext.Provider value={store}>
    {children}
</BookContext.Provider>
)
}