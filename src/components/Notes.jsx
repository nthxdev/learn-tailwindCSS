import { useState } from "react";
import CodeBlock from "./common/CodeBlock";
import Section from "./common/Section";
import Table from "./common/Table";
import Note from "./common/Note";

function Notes(){
    return (
        <>
        <div className="pages text-white">
            <h1 className="Pages-tittle">Quick Points</h1>
            <note>
                <ul>
                    <li>Check</li>
                </ul>
            </note>
        </div>
        </>
    )

}
export default Notes;