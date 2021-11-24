import React from "react";
import BookContainer from "./component/BookContainer";
import CurrentlyReading from "./component/CurrentlyReading";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

 
  return (
  
     <div>
       <BrowserRouter>
       <Routes>
        <Route exact path ="/" caseSensitive={false} element={<BookContainer/>} />
        <Route exact path ="/currently reading" caseSensitive={false} element={<CurrentlyReading/>} />
        
        
      </Routes>
    </BrowserRouter>
    {/* <BookContainer/> */}
     </div>
   
  );
}


export default App;
