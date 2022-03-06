import { Link } from "react-router-dom";
import { stored } from "../model/array";

const Navigation = () => {
  return (
    // <div >
     <nav > 
    
      <div>
      <h2>Bookshelves</h2>
      <Link to="/">Home</Link>
        {stored.map((data, index) => (
          <div key={index}>
            <Link onClick={window.location.reload} to={`/${data}`}>
              {data}
            </Link>
          </div>
        ))}
      </div>

      
    </nav> 
    // </div>
  );
};
export default Navigation;
