import React from "react";
import "./Navpills.css";

const Navpills = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
            <li><a href="/">Restart</a></li>
            <li
                className={props.message.indexOf('incorrectly') !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li>
            <li>Score: <span style={{color: "rgb(97, 218, 251)"}}>{props.curScore}</span> | Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default Navpills;