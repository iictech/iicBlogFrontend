import React,{ useEffect, useState } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs";
import CardUI from "./CardUI";
import axios from "axios";
import "./Home.css";
const limit = 10;
const headers = {
    'Access-Control-Allow-Origin': '*',
    mode: 'no-cors',
};

const Home = () => {
    const [Data, setData] = useState([]);
    const [Tags, setTags] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [isError, setisError] = useState(false);

    const MyCallback = () => {
        if(localStorage.getItem("offset")===null)localStorage.setItem("offset",0);
        axios({
            method: "GET",
            headers: headers,
            url: `https://iic-blog-backend.herokuapp.com/home/articles?limit=${limit}&offset=${parseInt(localStorage.getItem("offset"))*limit}`
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

    useEffect(MyCallback , []);

    const NextUpdate = () => {
        setisLoading(true);
        axios({
            method: "GET",
            headers: headers,
            url: `https://iic-blog-backend.herokuapp.com/home/articles?limit=${limit}&offset=${(parseInt(localStorage.getItem("offset"))+1)*limit}`
        }).then(req => {
            setData([...req.data]);
            localStorage.setItem("offset",parseInt(localStorage.getItem("offset"))+1);
            setisLoading(false);
        }).catch(err => {
            setisError(true);
            console.log(err);
        });
    };

    const PrevUpdate = () => {
        if(localStorage.getItem("offset")===0)return;
        setisLoading(true);
        axios({
            method: "GET",
            headers: headers,
            url: `https://iic-blog-backend.herokuapp.com/home/articles?limit=${limit}&offset=${(parseInt(localStorage.getItem("offset"))-1)*limit}`
        }).then(req => {
            setData([...req.data]);
            localStorage.setItem("offset",parseInt(localStorage.getItem("offset"))-1);
            setisLoading(false);
        }).catch(err => {
            setisError(true);
            console.log(err);
        });
    };

    useEffect(() => {
        window.addEventListener("beforeunload", function(e) {
            if(e || window.event){
                localStorage.removeItem("offset");
                e.preventDefault();
            }
        });
    });

    return (
        <>
            { isError ? "Error" : null}
            { isLoading ? "Loading" : <PageMain Data={Data} Tags={Tags}/> }
            { isLoading ? null : 
                <div className="pageControl">
                    <button onClick={PrevUpdate} className="Home-arrows"><BsFillArrowLeftCircleFill /></button>
                    <h4>{parseInt(localStorage.getItem("offset"))+1}</h4>
                    <button onClick={NextUpdate} className="Home-arrows"><BsFillArrowRightCircleFill /></button>
                </div>
            }
        </>
    );
};

const PageMain = (props) => {
    const base_url = window.location.origin;
    console.log(base_url);
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

export default Home;