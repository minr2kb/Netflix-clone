import React, { useEffect, useState } from 'react'
import axios from '../axios';
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer"

const baseURL = "http://image.tmdb.org/t/p/original";

const Row = ({ title, fetchURL, isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },
    [fetchURL],
    );

    const handleClick = (movie) => {
        if (trailerURL){
            setTrailerURL("");
        }
        else{
            movieTrailer(`${movie?.name || ""}`, {id: true, tmdbID: movie.id}).then(url => {
                console.log(url);
                setTrailerURL(url);
            }).catch((err) => console.log(err));
        }
    }

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay:1
        },
    };

    return (
        <div className="row">
            <h3 style={{paddingLeft: "20px"}}>{title}</h3>
            <div className="row_posters">
                {movies.map(movie => (
                    <img 
                        key={movie.id} 
                        onClick={() => handleClick(movie)} 
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                        src={`${baseURL}${isLargeRow?movie.poster_path:movie.backdrop_path}`} 
                        alt={movie.name}/>
                ))}
            </div>
            {trailerURL && <Youtube videoId={trailerURL} opts={opts}/>}
        </div>
    )
}

export default Row
