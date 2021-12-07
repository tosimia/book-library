import { Link } from "react-router-dom";
import { stored } from "../model/navArray";
const Navigation = () => {
    return(
        <nav>
            <Link to="/">Home</Link>
            <div>
                {stored.map((data, index) => (
                        <div>
                        <Link key={index} to={`/${data}`}>{data}</Link>
                        </div>
                    ))}
            </div>

           
        </nav>
    )
}
export default Navigation;