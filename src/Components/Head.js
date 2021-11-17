import React from "react";
//import Media from 'react-media';
import pic from "./pictures/1st pic.png";
import "./style.css";
export default function Header(){
    return(
        <>
        <head>
        <link href="style.css" rel="stylesheet"/>
        </head>
        <title>IIC-BLOG</title>
        <body>
        <div className="card">
    <div className="main">
    <div className="card-pic">
       <img src={pic} alt=" "/>
    </div>
    <div className="second-main">
        <div className="name">
            Rishita Mitra    Nov 17, 2021   Technology</div>
    <div className="big-para">
        VR: How it can impact our lives
    </div><br/>
    <div className="small-para">
        With every passing day, coders are discovering new ways to explore it and newer sector to apply VR. Take a pic to know how 
        <br/>you can expect this awesome technology to change your reality you have always seen!  
    </div><br/>
    <div className="button">
        <button className="btn">Continue Reading</button></div>
        </div>
        </div></div>


        </body>
        </>
            
        );
    }
