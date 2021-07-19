import React, {useState, useEffect} from 'react'
import axios from '../axios';
import requests from '../requests';
import "./Banner.css"
import { MdPlayArrow, MdInfoOutline } from 'react-icons/md';

const baseURL = "http://image.tmdb.org/t/p/original";

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)]);
            return request;
        }
        fetchData();
    },
    []
    );

    function truncate(str, n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }

    const style = {
        backgrounSize: "cover",
        backgroundImage: `url("${baseURL}${movie?.backdrop_path}")`,
        backgroundPosition: "center center"
    };

    return (
        <header className="banner" style={style}>
            <div className="banner_content"> 
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_description">
                    {truncate(movie?.overview,150)}
                </div>
                <div className="banner_buttons">
                    <button className="banner_button button_play">
                        <MdPlayArrow size={26}/>
                        <div style={{paddingRight: "0.2rem", paddingLeft: "0.4rem"}}>Play</div>
                    </button>
                    <button className="banner_button button_more">
                        <MdInfoOutline size={24}/>
                        <div style={{paddingRight: "0.2rem", paddingLeft: "0.4rem"}}>More Info</div>
                    </button>
                </div>
                
            </div>
            <div className="banner_fadeBottom"></div>
        </header>
    )
}

export default Banner
