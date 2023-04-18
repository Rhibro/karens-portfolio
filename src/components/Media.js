import YoutubeEmbed from "./YoutubeEmbed";
import vimeo from "../images/vimeo.svg";
import mediaImg from "../images/mediaImg.jpg";

const Media = () => {

return (
    <div className="mediaBody">
        <div className="columnM">
            <img src={mediaImg} alt="Karen smiling and sitting on a chair" className="mediaimg"></img>
        </div>
        <div className="columnM">
            <YoutubeEmbed embedId=""/>
            <div className="mediaInfoBox">
                <p className="mediaInfo">
                    Check out more of Karen's work
                </p>
                <img src={vimeo} alt="vimeo icon"></img>
            </div>
        </div>
    </div>
)

}

export default Media;