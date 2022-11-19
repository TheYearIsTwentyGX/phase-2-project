import React from "react";
import LangCard from "./LangCard";
import { useParams } from "react-router-dom";
import "../Style/LangList.css";

function LangList({ Langs, LangType }) {
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
            {Langs.map(x => (<div className="langCard"><LangCard key={x.id} props={x} /></div>))}
        </div>);
}

export default LangList;