import React from "react";
import BookContainer from "./component/BookContainer";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import StorageContainer from "./component/StorageContainer";


function App() {

 
  return (
  
     <div>
       <BrowserRouter>
       <Routes>
        <Route  path ="/" caseSensitive={false} element={<BookContainer/>} />
        <Route path ="/currently-reading" caseSensitive={false} element={<StorageContainer/>} />
        
        
      </Routes>
    </BrowserRouter>
    {/* <BookContainer/> */}
     </div>
   
  );
}


export default App;
