import { Link } from "react-router-dom";

const Footer = () => {

    return (

        <div className="footerBody">
            <p className="footerText">
                Design & Creation courtesy of:  
            
            <span>
                <Link to={{pathname:
                "https://www.rhiannonbronnimann.com/"}}
                target="_blank" className="rhiLink">
                 Rhiannon Brönnimann
            </Link>
            </span>
            </p>
        </div>

    )

}

export default Footer; 