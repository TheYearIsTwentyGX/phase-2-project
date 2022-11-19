import React from "react";
import "../LangCard.css";

function LangCard({props}) {
    return (
        <div className="LangCard">
            <div className="Content">
                <h1>{props.name}</h1>
                <h3>First Released: {props.founded}</h3>
            </div>
        </div>
    );
}

export default LangCard;