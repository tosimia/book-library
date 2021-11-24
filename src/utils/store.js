import React, {useState} from "react";
import {  getBook} from "../services";
export const BookContext = React.createContext();

export default ({children}) =>{
    const [book, setBook] = useState([])
    const [storedBook, setStoredbook] = useState([])

const bookData = async () =>{
    const response = await getBook();
    if (response){
        setBook(response.data.items)
    }
}
const AddToStorage = (id, quantity, storageName)=>{
    console.log(id)
   let currentlyReading = [];
   let isAlreadyIn = false;
   let number;
   if (localStorage.getItem(storageName)){
       currentlyReading = JSON.parse(localStorage.getItem(storageName))
   }

   for(let i = currentlyReading.length -1; i >=0; i--){
       if(currentlyReading[i].id === id){
           isAlreadyIn = true;
           number = i;
           break;
       }
   }
   if(isAlreadyIn){
    return ""
        // currentlyReading[number].quantity = currentlyReading[number].quantity + quantity;
   }else{
       currentlyReading.push({
           id: id,
       });
   }
   localStorage.setItem(storageName, JSON.stringify(currentlyReading));
};

const getBooksFromStorage = (storageName) =>{
    setStoredbook(JSON.parse(localStorage.getItem(storageName)));
};

const store = {
    bookFunc: bookData,
    book: book,
    AddToStorage: AddToStorage,
    getBooksFromStorage: getBooksFromStorage,
    storedBook: storedBook

};
return(
<BookContext.Provider value={store}>
    {children}
</BookContext.Provider>
)
}