import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";
import axios from "../axios";
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow  }) => {

    const [movies, setMovies] = useState([]);
    const [trialerurl , setTrailerUrl ] = useState("");

    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    
    },[fetchUrl]);

    const opts = {
        height: '300rem',
        width: '95%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const handleClick = (movie)=>{
          if(trialerurl){
              setTrailerUrl("");
          }else{
            console.log(movie)
              movieTrailer( movie.original_name || movie.name ||  movie.title  ||"")
              .then((url) => {
                  const urlParams = new URLSearchParams( new URL(url).search);
                  setTrailerUrl( urlParams.get('v'));
              }).catch((error) => console.log(error))
          }
      }

    return (
        <div className="row">
            <h1>{title}</h1>

            <div className={`row_posters`}>
                {movies.map( movie => (
                    <img  
                    key={movie.id}
                    onClick={()=> handleClick(movie)}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} />
               ))}
            </div>
            {trialerurl && <YouTube videoId={trialerurl} opts={opts} />}
        </div>
    )
}

export default Row
