import React from "react";
import LangCard from "./LangCard";
import { useParams } from "react-router-dom";
import "../Style/LangList.css";

function LangList({ Langs, viewDetails }) {
    function randomNumber() {
        return Math.floor(Math.random() * 30) - 15;
    }

    let langRows = [];
    for (let i = 0; i < Langs.length; i++) {
        if (i + 3 < Langs.length) {
            langRows.push(Langs.slice(i, i + 4));
        } else {
            langRows.push(Langs.slice(i));
        }
        i += 3;
    }

    return (
        <div className="LangList">
            {Langs.map(x => (<div className="langCard" style={{top:`${randomNumber()}px`, left:`${(randomNumber()*2)}px`}} key={x.id}><LangCard viewDetails={viewDetails} props={x} /></div>))}
        </div>);
}

export default LangList;