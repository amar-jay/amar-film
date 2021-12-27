import "./NavBar.css";
import './Banner.css';
import banner from "./banner.jpg";


function Banner() {
    return (
        <header className="Banner">
            <h1>Movie APP</h1>
           <img src={banner} alt="No image" className={`Banner__img`}/> 
        </header>
    )
}

export default Banner
