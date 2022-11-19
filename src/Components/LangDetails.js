import "../Style/LangDetails.css";

function LangDetails({props}) {
    function randomNumber() {
        return Math.floor(Math.random() * 40) - 20;
    }
    return (
        <div className="LangDetails">
            <div className="DetailsContent">
                <img src={props.image} alt={props.name + ' logo'}></img>
                <div className="DetailGroup" style={{top:`${randomNumber()}px`, left:`${randomNumber()}px`}}>
                    <h1>About {props.name}</h1>
                    <p>{props.description}</p>
                </div>
                <div className="DetailGroup" style={{top:`${randomNumber()}px`, left:`${randomNumber()}px`}}>
                    <h2>Created by:</h2>
                    <h3> {props.creator}</h3>
                    <h2>Founding Company:</h2>
                    <h3>{props.company}</h3>
                </div>
                <div className="DetailGroup" style={{top:`${randomNumber()}px`, left:`${randomNumber()}px`}}>
                    <h2>Initial Version:</h2>
                    <h3>{props.initialVersion}</h3>
                    <h2>Initial Release:</h2>
                    <h3>{props.founded}</h3>
                </div>
                <div className="DetailGroup" style={{top:`${randomNumber()}px`, left:`${randomNumber()}px`}}>
                    <h2>Latest Version:</h2>
                    <h3>{props.latestRelease}</h3>
                    <h2>Latest Version Launch Date:</h2>
                    <h3>{props.latestReleaseDate}</h3>
                </div>
            </div>
        </div>
    );
}

export default LangDetails;