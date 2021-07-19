import React, { useEffect, useState }from 'react'
import "./Nav.css"
import { MdArrowDropDown, MdNotifications, MdSearch } from "react-icons/md"

const Nav = () => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 80){
                handleShow(true);
            }
            else{
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <header className={`nav ${show && "nav_black"}`}>
            <div className="nav_menus_left">
                <img
                    className="nav_logo" 
                    src="https://about.netflix.com/images/logo.png" 
                    alt="Netflix Logo"
                />
                <h5 className="nav_menu home">Home</h5>
                <h5 className="nav_menu">TV Shows</h5>
                <h5 className="nav_menu">Movies</h5>
                <h5 className="nav_menu">New {"&"} Popular</h5>
                <h5 className="nav_menu">My List</h5>
            </div>
            <div className="nav_menus_right">
                <MdSearch size={24} style={{cursor: "pointer"}}/>
                <h5 className="nav_menu" style={{marginRight: "10px", marginLeft: "10px"}}>KIDS</h5>
                <MdNotifications size={30} style={{cursor: "pointer"}}/>
                <img
                    className="nav_avatar" 
                    src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" 
                    alt="Netflix Default Avatar"
                />
                <MdArrowDropDown size={24} style={{cursor: "pointer"}}/>
            </div>
        </header>
    )
}

export default Nav
