import { Link } from "react-router-dom";

const Header = () => {

    return (

        <div className="navBar">
        <Link to="/">
            <button className="navBtn">
                Home
            </button>
        </Link>
        <Link to="/About">
            <button className="navBtn">
                About
            </button>
        </Link>
        <Link to="/Resume">
            <button className="navBtn">
                Resume
            </button>
        </Link>
        <Link to="/Gallery">
            <button className="navBtn">
                Gallery
            </button>
        </Link>
        <Link to="/Media">
            <button className="navBtn">
                Media
            </button>
        </Link>
        <Link to="/Contact">
            <button className="navBtn">
                Contact
            </button>
        </Link>
        <Link to="/News">
            <button className="navBtn">
                News
            </button>
        </Link>
    </div>

    )

}

export default Header; 