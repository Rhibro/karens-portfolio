import newsImg from "../images/newsImg.jpg";

const News = () => {

    return (
        <div className="newsBody">
            <div className="columnN">
                <img src={newsImg} alt="Karen standing in heels" className="newsimg"></img>
            </div>
            <div className="columnN">
                <h2 className="newsHead">
                    Current Projects:
                </h2>
                <p className="newsInfo">
                    Here you can write about what you are currently working on...
                </p>
                <h2 className="newsHead">
                    Upcoming Projects:
                </h2>
                <p className="newsInfo">
                    Here you can write about what upcoming projects are in the works...
                </p>
            </div>
        </div>
    )

}

export default News;