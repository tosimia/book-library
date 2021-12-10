import React, {useState} from "react";
import data from "../model/book.json";
export const BookContext = React.createContext();

export default ({children}) =>{
     const [book, setBook] = useState(data)
    
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


const authorOrCategory = (value) =>{   
    if(value !== undefined){
        if(value.length >= 1){ 
            console.log(value)           
      return value.map && value.map((item) => item)
   }
     }
}
const store = {
    authorOrCategory: authorOrCategory,
    book: book,
    AddToStorage: AddToStorage,
    setBook: setBook,
   

};
return(
<BookContext.Provider value={store}>
    {children}
</BookContext.Provider>
)
}