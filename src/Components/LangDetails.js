import react from "react";

function LangDetails({props}) {
    console.log("got here");
    return (
        <div className="LangDetails">
            <div className="Content">
                <h1>{props.name}</h1>
                <h3>First Released: {props.founded}</h3>
            </div>
        </div>
    );
}

export default LangDetails;