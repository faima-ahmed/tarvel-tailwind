import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="fixed m-4  top-0 right-0 left-0 shadow-lg z-50">
            <div className="container px-4 flex justify-between items-center h-16">
                <h3>Travel</h3>
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
            </div>

        </nav>
    );
};

export default Navbar;