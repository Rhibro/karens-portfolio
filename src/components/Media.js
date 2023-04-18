import YoutubeEmbed from "./YoutubeEmbed";
import vimeo from "../images/vimeo.svg";

const Media = () => {

return (
    <div className="mediaBody">
        <YoutubeEmbed embedId=""/>
        <div className="mediaInfoBox">
            <p className="mediaInfo">
                Check out more of Karen's work
            </p>
            <img src={vimeo} alt="vimeo icon"></img>
        </div>
    </div>
)

}

export default Media;