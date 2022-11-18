import React from "react";
import "../LangCard.css";

function LangCard({props}) {
    return (
        <div className="LangCard">
        <h1>{props.name}</h1>
        </div>
    );
}

export default LangCard;