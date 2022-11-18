import React from "react";
import LangCard from "./LangCard";
import { useProps } from "react-dom";
import "../LangList.css";

function LangList({ Langs }) {
    let langRows = [];
    console.log(Langs.length);
    for (let i = 0; i < Langs.length; i++) {
        if (i + 2 < Langs.length) {
            langRows.push(Langs.slice(i, i + 3));
        } else {
            langRows.push(Langs.slice(i));
        }
        i += 2;
    }

    return (
        <table className="LangList">
            <tbody>
                {langRows.map(row =>
                (<tr>
                    {row.map(lang => <td><LangCard key={lang.name} props={lang}></LangCard></td>)}
                </tr>))}
            </tbody>
        </table>);
}

export default LangList;