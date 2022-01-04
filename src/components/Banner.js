import { useEffect, useState } from "react";
import banner from '../resources/avatar.jpg';
import '../styles/Banner.css';
import axios from "../api/axios";
import request from "../api/request";


function Banner() {
    const [randomMovie, setRandomMovie] = useState([]);

    useEffect(() => {
        // Data Fetching
        async function fetchData() {
            // data fetching of a random movie in FetchTrending
            const req = await axios.get(request.fetchTrending);
            let randomnum = Math.floor(Math.random() * req.data.results.length - 1);
            setRandomMovie(req.data.results[randomnum]);
            // console.log(req.data.results[0]);
        }

        fetchData();

    },[]);

    function trancate(string="Desription Yok!!!", n=200){ 
        // Trancates description text 
        return string.length > n ?string.substr(0, n-1)+ '...': string;
    }
    return (
        <header className="Banner">
            <img src={`https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}` || banner} alt="No Banner" className='Banner__img'/>
            <div className="Banner__contents">
                
                <div className="Banner__head">
                    <h1 className="Banner__movieName">{randomMovie.title|| randomMovie.name || randomMovie.original_name || "Konu yok" }</h1>
                    <h3 className=" Banner__count">Count: {randomMovie.vote_count}</h3>
                    <h3 className="Banner__count">Rating: {randomMovie.vote_average}</h3>
                </div>

                <p className="Banner__description">
                    {trancate(randomMovie.overview, 200)}
                </p>
                <div className="Banner__buttons"> 
                    <button className="Banner__button">Play</button>
                    <button className="Banner__button">My List</button>
               </div>
           </div>
         
        </header>
    )
}

export default Banner;
