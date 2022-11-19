import React from "react";
import {useHistory, useParams} from "react-router-dom";
import "../Style/LangCard.css";

function LangCard({props, viewDetails}) {
    const history = useHistory();
    const {langType} = useParams();
    function handleClick(e) {
        viewDetails(props.id);
        history.push(`/${langType}/` + props.id);
    }

    return (
        <div className="LangCard">
            <div onClick={handleClick} className="Content">
                <h1>{props.name}</h1>
                <h3>First Released: {props.founded}</h3>
            </div>
        </div>
    );
}

export default LangCard;