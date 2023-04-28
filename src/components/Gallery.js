import karen from "../images/karen.jpg";
import mediaImg from "../images/mediaImg.jpg";
import contactImg from "../images/contactImg.jpg";
import galleryImg from "../images/galleryImg.jpg";
import aboutImgTwo from "../images/aboutImgTwo.jpg";
import newsImg  from "../images/newsImg.jpg";
import aboutImgOne from "../images/aboutImgOne.jpg";


const Gallery = () => {

    return (
        <div className="galleryBody">
            
            <div className="columnG">
                <img src={karen} alt="Karen from the profile" className="imgOne"></img>
                <img src={contactImg} alt="Karen with boxing gloves on sitting on a chair" className="imgTwo"></img>
                <img src={mediaImg} alt="Karen smiling and sitting on a chair" className="imgThree"></img>
            </div>
            <div className="columnG">
                <img src={galleryImg} alt="Close up with dark lipstick on" className="imgFour"></img>
                <img src={aboutImgTwo} alt="Karen smiling" className="imgFive"></img>
                <img src={newsImg} alt="Karen standing with hands on hips" className="imgSix"></img>
                <img src={aboutImgOne} alt="Karen from the profile looking serious" className="imgSeven"></img>
            </div>

        </div>
    )
    
    }
    
    export default Gallery;