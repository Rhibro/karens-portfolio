import Form from "./Form";
import contactImg from "../images/contactImg.jpg";

const Contact = () => {

return (
    <div className="contactBody">
        <div className="columnC">
            <img src={contactImg} alt="Karen sitting on a chair with boxing gloves on" className="contactimg"></img>
        </div>
        <div className="columnC">
            <div className="formBox">
                <Form />
            </div>
        </div>
    </div>
)

}

export default Contact;