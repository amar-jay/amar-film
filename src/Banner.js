import "./NavBar.css";
import './Banner.css';
import banner from "./banner.jpg";
import axios from "./axios";
import request from "./request";
import { useEffect, useState } from "react";


function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            // site = `https://api.themoviedb.org/3/movie/550?api_key=${APIKEY}`

            const req = await axios.get(request.fetchTrending);
            let randomnum = Math.floor(Math.random() * req.data.results.length - 1);
            // let backdrop_path = req.data.results[0].backdrop_path;
            // let backdrop = await axios.get(request.backdrop_path);
            setMovie(req.data.results[randomnum]);
        }

        fetchData();
    },[]);

    console.log(movie);

    function trancate(string, n=100){ 
        return string?.length > n && string.substr(0, n-1)+ '...';
    }
    return (
        <header className="Banner">
            <h1 className="Banner__movieName">{movie.title || "Burada Film İzleyelim" }</h1>
           <img src={banner} alt="No Banner" className='Banner__img'/>
           <div className="Banner__buttons"> 
           <button className="Banner__button">Play</button>
           <button className="Banner__button">My List</button>
           </div>
           <p className="Banner__description">
               {trancate(movie.overview, 151) || `Desription Yok!!!`}
            </p>
        </header>
    )
}

export default Banner
