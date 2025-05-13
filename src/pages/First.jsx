import React from "react";
import "../styles/style.css";
import alan from "../assets/images.jpeg";
import luke from "../assets/images (1).jpeg";
import woman from "../assets/images (2).jpeg";
import han from "../assets/images (3).jpeg";


const Information = (Button) =>{
    // let Char = [
    //     {
    //       name: 'Anakin SkyWalker',
    //       age: 47,
    //       picture: {alan}
    //     },
    //     {
    //       name: 'Luke SkyWalker',
    //       age: 47,
    //       picture: {luke}
    //     },
    //     {
    //       name: 'Princess Leia',
    //       age: 47,
    //       picture: {woman}
    //     },
    //     {
    //       name: 'Han Solo',
    //       age: 48,
    //       picture: {han}
    //     },
    // ];

    function Greeting({IsLoggedIn}){
      if(IsLoggedIn){
        return <h1>WELCOME</h1>
      }
    }

    return(
        <>
        <div id="container" className="container">
            {/* <div className="heading">
                <h1>Meet the Star Wars charcters</h1>
            </div>
            <div className="cards">
            {
              Char.map(element =>{
                return(
                    <div className="card">
                    <img src= {element.picture} alt= {element.name} />
                    <p>Name: {element.name}</p>
                    <p>Age: {element.age}</p>
                    </div>
                )
            
             })
             }
           </div> */}
        </div>
        </>
    )
  }

;
export default Information;

//Read about pagination 
//search function with javascript
//create dashboard to show the statistics
//charts in react
//destructuring
//handling events
//props
//conditional rendering
//dynamic routing

