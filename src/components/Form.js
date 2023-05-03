import React from "react";
import linkedin from "../images/linked.png";
import insta from "../images/instagram.svg";
import youtube from "../images/youtube.png";
import vimo from "../images/vimeo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Form() {

    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
      e.preventDefault()
      setFormStatus('Submitting...')
      const { email, message } = e.target.elements
      let conFom = {
        email: email.value,
        message: message.value,
      }
      console.log(conFom)
    }
    return (
      <div className="myForm">
        <form onSubmit={onSubmit}>
          <div className="emailSection">
            <label htmlFor="email">
              email:
            </label>
            <input className="inPut" type="email" id="email" required />
          </div>
          <div className="messageSection">
            <label htmlFor="message">
              message:
            </label>
            <textarea className="textArea" id="message" required />
          </div>
          <div className="socialGroup">
          <button className="formBtn" type="submit">
            {formStatus}
          </button>
          
            <a className="socialBtn" href="https://www.linkedin.com/in/karen-olrich-white-b288681bb/" target="_blank" rel="noopener noreferrer">
              <img className="socialOne" src={linkedin} alt="linkedin icon" ></img></a>
            <a className="socialBtn" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img className="socialTwo" src={insta} alt="instagram icon" ></img></a>
            <a className="socialBtn" href="https://www.youtube.com/@karenolrich-white9307/featured" target="_blank" rel="noopener noreferrer">
              <img className="socialThree" src={youtube} alt="youtube icon" ></img></a>
            <a className="socialBtn" href="https://vimeo.com/user54179902" target="_blank" rel="noopener noreferrer">
              <img className="socialFour" src={vimo} alt="vimo icon" ></img></a>
              <FontAwesomeIcon icon="fa-brands fa-instagram" style={{color: "#000000",}} />
          </div>
        </form>
      </div>
    )
  }

  export default Form; 

  /* 
  
 
  
  */