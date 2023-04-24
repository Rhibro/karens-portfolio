import resumeImg from "../images/resumeImg.jpg";

const Resume = () => {

return (
    <div className="resumeBody">
        <div className="columnR">
            <div className="imgInfoBox">
            <img className="resumeimg" src={resumeImg} alt="Karen in a black leather jacket looking serious"></img>
            <h2 className="resumeTitles">
                Special Skills
            </h2>
            <ul>
                <li className="listIr">
                    Languages: Icelandic*,  Swedish
                </li>
                <li className="listIr">
                    Accents: RP*, Hightened RP, Liverpool, London
                </li>
                <li className="listIr">
                    Sports: Swimming*, Cycling, Pole Dancing, Boxing*, 
                    Weight Lifting, Aerobics, Running, Hiking, Skiing, 
                    Jazz Ballet, Yoga (Vinyasa)
                </li>
                <li className="listIr">
                    Singing: Mezzo-Soprano
                </li>
                <li className="listIr">
                    Stage Combat: Rapier & Dagger and Unarmed BASSC certificate
                </li>
                <li className="listIr">
                    Drivers Licence
                </li>
            </ul>
            <h2 className="resumeTitles">
                Training 
            </h2>
                <p className="resumeItems">
                    The Kogan Academy of Dramatic Arts | Directing Course | 2016
                </p>
                <p className="resumeItems">
                    The Kogan Academy of Dramatic Arts | BA (Hons Acting) | 2012-2015
                </p>
                </div>
        </div>
        <div className="columnR">
        <div className="resumeInfoBox">  
        <h2 className="resumeTitles">
            Film/TV
        </h2>
            <p className="resumeItems">
                Off the Beaten Path | Djammviskubit (Short film) | 2019 | Stina
            </p>
            <p className="resumeItems">
                Yellow Kite Films | From London with Love (TV Pilot) | 2018 | Anna
            </p>
            <p className="resumeItems">
                Reverie Motion Pictures | External Gazer (short film) | 2017​ | Melissa
            </p>
            <p className="resumeItems">
                Westminster University| Cleaner Conscience (short film) | 2017 | Jane Doe
            </p>
            <p className="resumeItems">
                London Film School | Artificial White (short film) | 2016 | N29
            </p>
            <p className="resumeItems">
                One Man Film | Consequence (short film) | 2016 | Elsa
            </p>
        <h2 className="resumeTitles">
            Stage
        </h2>
            <p className="resumeItems">
                Misenscene Productions | The Weak Ones | 2019
                Adele in 'Facing Death' & Miss Y in 'The Stronger'
            </p>
            <p className="resumeItems">
                Splats Entertainment | Romeo & Juliet | 2019 | Juliet & Tybalt
            </p>
            <p className="resumeItems">
                Tenth Muse Productions | Beauty and the Beast | 2018 | Beauty
            </p>
            <p className="resumeItems">
                Misenscene Productions | A Christmas Carol | 2017 | Belle
            </p>
            <p className="resumeItems">
                Immersive Music | Hounds of Love | 2017 | Crow Creature
            </p>
            <p className="resumeItems">
                Splats Entertainment | Macbeth | 2017 | Lady Macbeth & Witch 1
            </p>
            <p className="resumeItems">
                Splats Entertainment | A Midsummer Nights Dream | 2017 | Helena
            </p>
            <p className="resumeItems">
                Sofa Productions | Extremities | 2016 | Marjorie
            </p>
        <h2 className="resumeTitles">
            Commercials
        </h2>
            <p className="resumeItems">
                Localove | Localove app online | 2017 | Lead Actress
            </p>
        </div>
        </div> 
    </div>
)

}

export default Resume;