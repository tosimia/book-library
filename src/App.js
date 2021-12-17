import React from "react";
import HomePage from "./component/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StorageContainer from "./component/StorageContainer";
import DisplayOnlyOneItem from "./component/DisplayOnlyOneItem";
import Category from "./component/Category";
import "./app.css"

function App() {

 
  return (
  
     <div>
       <BrowserRouter>
        <Routes>
          <Route  path ="/" caseSensitive={false} element={<HomePage/>} />
          <Route path ={`/criteria/:slug`} caseSensitive={false} element={<StorageContainer/>} />
          <Route path={`/book/:id`} caseSensitive={false} element={<DisplayOnlyOneItem/>}/>
          <Route path={`/category/:category`} caseSensitive={false} element={<Category/>}/>
    
      </Routes>
    </BrowserRouter>
     </div>
   
  );
}


export default App;
