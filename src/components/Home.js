import karen from "../images/karen.jpg"
//import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react'


const Home = () => {

    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension(){
      return {
            width: window.innerWidth,
            height: window.innerHeight
      }
    }

    useEffect(() => {
          const updateDimension = () => {
                setScreenSize(getCurrentDimension())
          }
          window.addEventListener('resize', updateDimension);
  
      
          return(() => {
              window.removeEventListener('resize', updateDimension);
          })
                    }, [screenSize])

    return (
        <div className="row">
            <div>
            <img className="karensFace" src={karen} alt="a head shot of Karen looking pensive"></img>
            </div>
            <div className="homeBody">
            <div >
                <h1 className="karenName">KAREN OLRICH-WHITE</h1>
            </div>
            </div>
        </div>
    )

}

export default Home; 

