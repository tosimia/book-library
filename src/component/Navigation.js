import { Link } from "react-router-dom";
import { stored } from "../model/array";
const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <div>
        {stored.map((data, index) => (
          <div>
            <Link
              key={index}
              onClick={window.location.reload}
              to={`/criteria/${data}`}
            >
              {data}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};
export default Navigation;
