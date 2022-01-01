import React, {useState, useEffect} from 'react';
import "./NavBar.css";
import logo from "./logo.svg";
import avatar from "./avatar.jpg";
import Banner from './Banner';

function NavBar() {
    const [show,setShow] = useState(false);

    const showNavBar = () => {
        
        if (window.scrollY > 600){
            setShow(true)
            console.log("🍾");
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", showNavBar);
        
        return () => window.removeEventListener("scroll", showNavBar);

    },[]);

    return (
        <div className='NavBar'>
            <header className='NavBar__content'>
            <img src={logo} alt="Logo"className={`logo NavBar__logo ${show && 'hide'}`}/> 
            <Banner />
            <img src={avatar} alt="Avatar" className={`logo NavBar__avatar ${show && 'hide'}`}/>             
            </header>
        </div>
    )
}

export default NavBar
