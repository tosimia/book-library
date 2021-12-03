import React from "react";
import BookContainer from "./component/BookContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StorageContainer from "./component/StorageContainer";
import DisplayOnlyOneItem from "./component/DisplayOnlyOneItem";


function App() {

 
  return (
  
     <div>
       <BrowserRouter>
        <Routes>
          <Route  path ="/" caseSensitive={false} element={<BookContainer/>} />
          <Route path ={`/:slug`} caseSensitive={false} element={<StorageContainer/>} />
          <Route path={`/book/:id`} caseSensitive={false} element={<DisplayOnlyOneItem/>}/>
      </Routes>
    </BrowserRouter>
    {/* <BookContainer/> */}
     </div>
   
  );
}


export default App;