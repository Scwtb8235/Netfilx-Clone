/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import "../Row.css"
import axios from '../Axios';
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"
const base_url = "https://image.tmdb.org/t/p/original/";
function Row({title, fetchUrl,isLargeRow}) {
const [movies,setmovies] = useState([]);
const [trailerUrl, setTrailerUrl] =useState('')
useEffect(()=>{
    async function fetchData(){
        const request = await axios.get(fetchUrl);
        console.log(request)
        setmovies(request.data.results);
        return request
    }
    fetchData();
},[fetchUrl]);
const opts = {
    height: "390",
    width: "100%",
    playerVars: {
        autoplay: 1,
    }
};
const handleClick = (movie)=>{
    if(trailerUrl){
        setTrailerUrl('');
    }else{
        movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url)=>{
            console.log(url)
            const url_params = new URLSearchParams(new URL(url.search))
            console.log(url_params)
            setTrailerUrl(url_params.get("v"))
        })
        .catch((err)=>{
            console.log(err)
        })

        
    }
}
    return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='row_posters'>
            {movies.map((movie)=> (
                <img 
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                onClick={()=>handleClick(movie)}
                src={`${base_url}${isLargeRow? movie.poster_path :movie.backdrop_path}`}
                alt={movie.name}                
                />
            )                
            )}
    </div>
    <div style={{padding:"30px"}}>
        {trailerUrl && <Youtube videoId ={trailerUrl} opts={opts} />}
    </div>
    </div>
)
}

export default Row
