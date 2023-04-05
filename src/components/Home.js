import { Link } from "react-router-dom";

const Home = () => {

<div>
    <div className="navBar">
        <Link to="/Home">
            <button>
                Home
            </button>
        </Link>
        <Link to="/About">
            <button>
                About
            </button>
        </Link>
        <Link to="/Resume">
            <button>
                Resume
            </button>
        </Link>
        <Link to="/Gallery">
            <button>
                Gallery
            </button>
        </Link>
        <Link to="/Media">
            <button>
                Media
            </button>
        </Link>
        <Link to="/Contact">
            <button>
                Contact
            </button>
        </Link>
        <Link to="/News">
            <button>
                News
            </button>
        </Link>
    </div>
</div>


}

export default Home; 