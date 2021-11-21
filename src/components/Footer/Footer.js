import React from "react";
import { SocialMediaIconsReact } from "social-media-icons-react";
import { useMediaQuery } from "react-responsive";
import "./Footer.css";

const Footer = () => {
    const isTablet = useMediaQuery({ query: "(max-width:772px)" });
    const isTab = useMediaQuery({ query: "(max-width:582px)" });
    const isPhone = useMediaQuery({ query: "(max-width:383px)" });

    return(
        <div className="Footer">
            <div className="InnerFooter">
                <SocialMediaIconsReact backgroundColor="rgba(0,0,0,0)" borderWidth="0" iconColor="rgba(0,0,0,0.4)" icon="facebook" iconSize="1" url="#" size={isPhone ? "12" : isTab ? "15" : isTablet ? "20" : "30"}/>
                <SocialMediaIconsReact backgroundColor="rgba(0,0,0,0)" borderWidth="0" iconColor="rgba(0,0,0,0.4)" icon="twitter" iconSize="1" url="#" size={isPhone ? "12" : isTab ? "15" : isTablet ? "20" : "30"}/>
                <SocialMediaIconsReact backgroundColor="rgba(0,0,0,0)" borderWidth="0" iconColor="rgba(0,0,0,0.4)" icon="instagram" iconSize="2" url="#" size={isPhone ? "12" : isTab ? "15" : isTablet ? "20" : "30"}/>
                <SocialMediaIconsReact backgroundColor="rgba(0,0,0,0)" borderWidth="0" iconColor="rgba(0,0,0,0.4)" icon="linkedin" iconSize="1" url="#" size={isPhone ? "12" : isTab ? "15" : isTablet ? "20" : "30"}/>
                <SocialMediaIconsReact backgroundColor="rgba(0,0,0,0)" borderWidth="0" iconColor="rgba(0,0,0,0.4)" icon="youtube-play" url="#" size={isPhone ? "12" : isTab ? "15" : isTablet ? "20" : "30"}/>
            </div>
        </div>
    );
};

export default Footer;