import React from "react";
import LangCard from "./LangCard";
import { useParams } from "react-router-dom";
import "../Style/LangList.css";

function LangList({ Langs, LangType }) {
    let langRows = [];
    for (let i = 0; i < Langs.length; i++) {
        if (i + 2 < Langs.length) {
            langRows.push(Langs.slice(i, i + 3));
        } else {
            langRows.push(Langs.slice(i));
        }
        i += 2;
    }

    return (
        <div className="LangList">
        <table className="LangTable">
            <tbody>
                {langRows.map(row =>
                (<tr>
                    {row.map(lang => <td><LangCard key={lang.name} props={lang}></LangCard></td>)}
                </tr>))}
            </tbody>
        </table>
        </div>);
}

export default LangList;