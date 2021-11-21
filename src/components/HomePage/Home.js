import React from "react";
import Data from "./SampleData/Data";
import Tags from "./SampleData/Tags";
import CardUI from "./CardUI";
import "./Home.css";

const Home = () => {
    return (
        <div className="HomePage_Main">
            <div className="HomePage_CardHolder">
                {Data.map((e,index) => {
                    return <CardUI key={index} {...e}/>
                })}
            </div>
            <div className="HomePage_TagHolder">
                <div className="HomePage_TagHead">TAGS</div>
                <div className="HomePage_RecomendedTags">
                    {Tags.map((e,index) => {
                        return <div key={index} className="HomePage_Tags">{e}</div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;