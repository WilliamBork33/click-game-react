//Importing React Components
import React from "react";
import "./Wrapper.css";

//Wrapper Div
const Wrapper = props => <div className="wrapper">{props.children}</div>;

//Export Component for Use in the Rest of Application.
export default Wrapper;
