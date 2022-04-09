import React, {useState, useEffect} from 'react';
import "../styles/NavBar.css";
import avatar from "../resources/avatar.jpg";
import Banner from './Banner';


function NavBar() {
    const [show,setShow] = useState(false);

    const showNavBar = () => {
        
        if (window.scrollY > 600){
            setShow(true)
            // console.log("Scrolled...");
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        // an evenlistener for scroll
        window.addEventListener("scroll", showNavBar);
        
        return () => window.removeEventListener("scroll", showNavBar);

    },[]);

    return (
        <div className='NavBar'>
            <header className='NavBar__content'>
            <img src="logo.svg" alt="Logo"className={`logo NavBar__logo ${show && 'hide'}`}/> 
            <Banner />
            <img src={avatar} alt="Avatar" className={`logo NavBar__avatar ${show && 'hide'}`}/>             
            </header>
        </div>
    )
}

export default NavBar;
