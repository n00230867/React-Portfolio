import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/books">Books</Link>
        </div>
    );
};

export default NavBar;