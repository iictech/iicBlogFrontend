import React from "react";
import "./CardUI.css";
import profileUser from "./Photos/author.svg";
import { Link } from "react-router-dom";
import Media from "react-media";

const compress = (str,len) => {
    if(str.length>=len)str = str.slice(0,len) + "...";
    return str;
}

const Card = (props) => {
    return(
        <div className="Home_cardMain">
            <div className="Home_cardInfo">
                <div className="Home_articleInfo">
                    <div className="Home_CardAuthor">
                        <img className="Home_AuthorSvg" src={profileUser} alt="user"/>
                        <div className="Home_AuthorName">{props.author}</div>
                    </div>
                    <div className="Home_CardDate">{props.postedDate}</div>
                    <div className="Home_CardTag">{props.tags[0]}</div>
                </div>
                <div className="Home_articleHeading">{compress(props.title,35)}</div>
                <Media queries={{SmallWindow: "(max-width:776px)"}}>
                    {matches => !matches.SmallWindow ? (
                        <div className="Home_articleBody">{compress(props.Body,200)}</div>
                    ):(
                        <div className="Home_articleBody">{compress(props.Body,150)}</div>
                    )}
                </Media>
                <div className="Home_articleFooter">
                    <Link className="Home_CardContinueReading" to={`/`}>
                        Continue Reading
                    </Link>
                </div>
            </div>
            <div className="Home_cardImageBox">
                <img className="Home_cardImage" src={props.imageUrl} alt="sampleImage"/>
            </div>
        </div>
    )
};

/*
<div className="Home_articleHeading">{compress(props.title,35)}</div>
<div className="Home_articleBody">{compress(props.Body,200)}</div>
*/

export default Card;