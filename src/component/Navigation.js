import { Link } from "react-router-dom";
const Navigation = () => {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/currently-reading">Current Reading</Link>
        </nav>
    )
}
export default Navigation;