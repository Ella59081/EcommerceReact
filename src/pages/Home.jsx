import React from "react";
import "../styles/home.css";

const FirstPage = (props) =>{
    return(
        <>
        <h1 style={{fontFamily: "monospace"}}>Hello {props.name}</h1>
        <p>You are {props.age} years old</p>
        </>
    )
}

export default FirstPage;