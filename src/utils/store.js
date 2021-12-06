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
    
   let storedBook = [];

   if (localStorage.getItem(storageName)){
       storedBook = JSON.parse(localStorage.getItem(storageName))
   }
   let isAlreadyIn = false;
   let number;
   for(let i = storedBook.length -1; i >=0; i--){
       if(storedBook[i].book.id === book.id){
           isAlreadyIn = true;
           number = i;
           break;
       }
   }
   if(isAlreadyIn){
    
    storedBook[number].quantity = storedBook[number].quantity + quantity;

   }else{
       storedBook.push({
           book: book,
           quantity: quantity,
       });
   }
   localStorage.setItem(storageName, JSON.stringify(storedBook));
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