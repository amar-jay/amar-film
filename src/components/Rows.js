import { useEffect, useState } from "react";
import '../styles/Rows.css';
import axios from "../api/axios";
import { Link } from "react-router-dom";


function Rows({title, fetchUrl}) {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            // data fetching of a random movie in FetchTrending
            const req = await axios.get(fetchUrl);
            setMovieList(req.data.results);
        }

        fetchData();

    },[fetchUrl]);

    function trancate(string="Desription Yok!!!", n=200){ 
        // Trancates description text 
        return string.length > n ?string.substr(0, n-1)+ '...': string;
    }

    return (
        <header className="Row">
            <h1>{title}</h1>
            <hr className="hr"/>
            <div className="Row__contents">
                
                {/* <div className="Banner__head">

                    <h1 className="Banner__movieName">{movieList.title|| movieList.name || movieList.original_name || "Konu yok" }</h1>
                    <h3 className=" Banner__count">Count: {movieList.vote_count}</h3>
                    <h3 className="Banner__count">Rating: {movieList.vote_average}</h3>
                </div> */}
                
                {movieList.map(movie => (
                    <Link to={`/movies/${movie.id}`} key={movie.id}>
                    <div className="Row__card">
                    <div className="card">
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="card__image" alt="Card" />
                        <div className="card__overlay">
                            <div className="card__header">
                            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                            {movie.backdrop_path && <img className="card__thumb" alt="thumbnail" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>}
                                <div className="card__header-text">
                                    <h3 className="card__title">{movie.title|| movie.name || movie.original_name || "Konu yok" }</h3>
                                    <span className="card__status">{movie.first_air_date || movie.release_date || "Unknown Release Date"}</span>
                                </div>          
                            </div>
                            <p className="card__description">{trancate(movie.overview, 100)}</p>
                        </div>
                    </div>
                    </div>
                    </Link>
                ))}
                {/* <div className="Banner__buttons"> 
                    <button className="Banner__button">Play</button>
                    <button className="Banner__button">My List</button>
               </div> */}
           </div>
         
        </header>
    )
}

export default Rows;
