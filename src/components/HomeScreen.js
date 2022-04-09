import "../styles/HomeScreen.css";
import NavBar from "./NavBar";
import request from "../api/request";
import Rows from "./Rows";

function HomeScreen() {
    return (
        <div className="HomeScreen">
            {/* Nav */}
            <NavBar />
            <Rows
            title="Netflix Originals"
            fetchUrl = {request.fetchNetflixOriginals}/>
            {/* Row */}
             <Rows
            title="Action Movies"
            fetchUrl={request.fetchActionMovies}/>
            
            <Rows
            title="Netflix Originals"
            fetchUrl={request.fetchNetflixOriginals}/>
            {/* <Rows
            title="Top Rated"
            fetchUrl={request.fetchTopRated}/> */}
            {/* <Rows
            title="title.."
            fetchUrl={req}/> */}
            <Rows
            title="Trending"
            fetchUrl={request.fetchTrending}/>
             {/* <Rows
            title="title.."
            fetchUrl={request.fetchTrending}/>
            <Rows
            title="title.."
            fetchUrl={request.fetchTrending}/>
            <Rows
            title="title.."
            fetchUrl={request.fetchTrending}/> */}
            
            </div>
    )
}

export default HomeScreen
