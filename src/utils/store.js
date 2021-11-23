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

const store = {
    bookFunc: bookData,
    book: book,

}
return(
<BookContext.Provider value={store}>
    {children}
</BookContext.Provider>
)
}