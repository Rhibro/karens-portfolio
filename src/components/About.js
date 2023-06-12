import aboutOne from "../images/aboutImgOne.jpg";
import aboutTwo from "../images/aboutImgTwo.jpg";

const About = () => {

    return (
        <div className="aboutBody">
            <div className="columnA">
            <div className="aboutImgBox">
                <img className="aboutImg" src={aboutOne} alt="profile of Karen"></img>
                <img className="aboutImg" src={aboutTwo} alt="Karen smiling"></img>
            </div>
            </div>
            <div className="columnA">
            <div className="aboutInfoBox">
                <p className="aboutInfo">
                <span className="karenName">Karen</span> is a British/Icelandic actress who received a BA(Hons) in acting from The Kogan Academy of
                 Dramatic Arts in 2016. Whilst training Karen played roles such as Dottie (‘Killer Joe’) and Kim 
                 (‘Caravan’). After graduating she first appeared in ‘Extremities’ during The Brighton and Camden 
                 Fringe Festivals playing the lead, Marjorie.
                </p>
                <p className="aboutInfo">
                She has since been in various short films and fringe theatre productions in London. Roles she has 
                played include Lady Macbeth (‘Macbeth’), Belle (‘A Christmas Carol’) and Helena (‘A Midsummer’s Night Dream’).
                </p>
                <div>
                    <ul>
                        <li className="aboutListI">Height: 5"5</li>
                        <li className="aboutListI">Hair Colour: Blonde</li>
                        <li className="aboutListI">Eye Colour: Blue</li>
                        <li className="aboutListI">Body type: Slim</li>
                        <li className="aboutListI">Nationalities: British, Icelandic</li>
                        <li className="aboutListI">Appearance: Scandinavian, White</li>
                        <li className="aboutListI">Playing Age: 25 to 35</li>
                    </ul>
                </div>
                <p className="aboutInfo">
                    Location:
                </p>
                <p className="aboutInfo">
                London, UK || Malmö, Sweden || Reykjavík, Iceland
                </p>
            </div>
            </div>
        </div>
    )

}

export default About;
