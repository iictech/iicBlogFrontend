import React from "react";
import AuthorSVG from "../HomePage/Photos/author.svg";
import "./ReadingPage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const headers = {
    'Access-Control-Allow-Origin': '*',
    mode: 'no-cors',
};


const Reading = () => {

    const { username, id } = useParams();
    const [Data, setData] = useState({});
    const [isLoading, setisLoading] = useState(true);
    const [isError, setisError] = useState(false);

    const MyCallback = () => {
        axios({
            method: "GET",
            headers: headers,
            url: `https://iic-blog-backend.herokuapp.com/@${username}/${id}`
        }).then(req => {
            setData(req.data);
            setisLoading(false);
        }).catch(err => {
            setisError(true);
        });
    };
    useEffect(MyCallback, []);
    

    return (
        <>
        { isError ? "Error" : null }
        { isError ? null : isLoading ? "Loading" : <MainArticle {...Data} />}
        </>
    );
};

const MainArticle = (props) => {
    const base_url = window.location.origin;
    return (
        <div className="Reading_articleMain">
            <div className="Reading_articleHead">
                <div className="Reading_articleTags">
                {props.tags.map((e,index) => {
                        return (
                            <a href={`${base_url}/tags/${e}`}>
                                <div className="Reading_articleTAG">{e.toUpperCase()}</div>
                            </a>
                        );
                })}</div>
                <div className="Reading_articleHeading">{props.title}</div>
                <div className="Reading_articleInfo">
                    <div className="Reading_articleAuthor">
                        <div className="Reading_authorSVG"><img src={AuthorSVG} alt=""></img></div>
                        <div className="Reading_articleUsername">{props.author}</div>
                    </div>
                    <div className="Reading_articleDate">{props.postedDate.toUpperCase()}</div>
                    {/*
                    <div className="Reading_articleLike">
                        <div className="Reading_articleLikeCount">{props.likes}</div>
                        <div className="Reading_articleLikeSVG"></div>
                    </div>
                    */}
                </div>
            </div>
            <div className="Reading_articleImage"><img src={props.imageUrl} alt=""></img></div>
            <div className="Reading_articleBody">
                {props.body.map((e,index) => {
                    return (
                        <>
                            <p>{e}</p>
                            <br/>
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default Reading;