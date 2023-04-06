import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import karen from "../images/karen.jpg"
import "bootstrap/dist/css/bootstrap.min.css";


const Home = () => {
    return (
        <div className="row">
            <div>
            <img className="karensFace" src={karen} alt="a head shot of Karen looking pensive"></img>
            </div>
            <div className="homeBody">
            <div>
                <Header />
            </div>
            <div >
                <h1 className="karenName">KAREN OLRICH-WHITE</h1>
            </div>
            
            <div>
                <Footer />
            </div> 
            </div>
        </div>
    )

}

export default Home; 


/*




     


*/