import React,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardUI from "./CardUI";
import axios from "axios";
import "./Home.css";
const headers = {
    'Access-Control-Allow-Origin': '*',
    mode: 'no-cors',
};

const TagSearch = () => {
    const [Data, setData] = useState([]);
    const [Tags, setTags] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [isError, setisError] = useState(false);
    const { tag } = useParams();
    const [Tag, setTag] = useState(tag);

    const MyCallback = () => {
        axios({
            method: "GET",
            headers: headers,
            url: `https://iic-blog-backend.herokuapp.com/tag/${Tag}?limit=10000&offset=0`
        }).then(req => {
            setData(req.data);
            setisLoading(false);
        }).catch(err =>{
            setisError(true);
            console.log(err);
        });

        axios({
            method: "GET",
            headers: headers,
            url: `https://iic-extn.herokuapp.com/home/tags`
        }).then(req => {
            let arr = ["","","","",""];
            console.log(req.data);
            req.data.forEach((tags_json,idx) => {arr[idx] = tags_json.tag;});
            setTags(arr);
            setisLoading(false);
        }).catch(err =>{
            setisError(true);
            console.log(err);
        });
    }

    useEffect(MyCallback, []);

    return (
        <>
            { isError ? "Error" : null}
            { isLoading ? "Loading" : <PageMain Data={Data} setTag={setTag} Tags={Tags}/> }
        </>
    );
};

const PageMain = (props) => {
    const base_url = window.location.origin;
    return (
        <div className="HomePage_Main">
            <div className="HomePage_CardHolder">
                {props.Data.map((e,index) => {
                    return <CardUI key={index} {...e}/>
                })}
            </div>
            <div className="HomePage_TagHolder">
                <div className="HomePage_TagHead">TAGS</div>
                <div className="HomePage_RecomendedTags">
                    {props.Tags.map((e,index) => {
                        return (
                            <a href={`${base_url}/tags/${e}`}>
                                <div key={index} className="HomePage_Tags">{e}</div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TagSearch;