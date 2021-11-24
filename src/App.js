import React from "react";
import BookContainer from "./component/BookContainer";
import CurrentlyReading from "./component/CurrentlyReading";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

 
  return (
  
     <div>
       <BrowserRouter>
       <Routes>
        <Route  path ="/" caseSensitive={false} element={<BookContainer/>} />
        <Route path ="/currently-reading" caseSensitive={false} element={<CurrentlyReading/>} />
        
        
      </Routes>
    </BrowserRouter>
    {/* <BookContainer/> */}
     </div>
   
  );
}


export default App;
