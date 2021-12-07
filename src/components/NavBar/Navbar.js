import React, { useState } from "react";
import { Link } from "react-router-dom";
import IICBlogIcon from "./Icons/IICIcon.svg";
import SearchIcon from "./Icons/SearchIcon.svg";
import ProfileIcon from "./Icons/profileIcon.svg";
import "./Navbar.css";
// import { useRouteMatch } from "react-router-dom";
// import { browserHistory } from "react-router";

const Navbar = () => {
    const [InputVisibility,setInputVisibility] = useState(false);
    const [InputValue,setInputValue] = useState("");
    const KeyEnterDetection = (e) => {
        if(e.key==="Enter"){
            console.log(InputValue);
        }
    };

    return (
        <div className="navbar">
            <Link to="/" className="IICBlogIconNav">
                <img src={IICBlogIcon} alt="icon"/>
            </Link>
            <div className="NavIconHolder">
                {InputVisibility && <input placeholder="Search Here" onChange={e => setInputValue(e.target.value)} onKeyDown={KeyEnterDetection} value={InputValue} onBlur={e => setInputVisibility(!InputVisibility)} maxLength="30"/>}
                <div className="SearchNav"><img src={SearchIcon} alt="search" onClick={e => setInputVisibility(!InputVisibility)}/></div>
                <Link to="/" className="ProfileLink" href="#"><img src={ProfileIcon} alt="profile"/></Link>
            </div>
        </div>
    );
};

export default Navbar;