import React from "react"
import "../css/Navbar.css"
import { Skills } from "./Skills"
import { NavLink } from "react-router-dom"

export function Navbar() {

    return (
        <div className="navbar">
            <div className="navbar_link_div">
                <NavLink to="/" className={({ isActive }) => isActive ? "link_decoration_active" : "link_decoration"} >
                    Home
                </NavLink>
            </div>
            <div className="navbar_link_div" >
                <NavLink to="/projects" className={({ isActive }) => isActive ? "link_decoration_active" : "link_decoration"}>
                    Projects
                </NavLink>
            </div>
            <div className="navbar_link_div">
                <NavLink to="/skills" className={({ isActive }) => isActive ? "link_decoration_active" : "link_decoration"}>
                    Skills
                </NavLink>
            </div>
            {/* <div>Music</div> */}
            <div className="navbar_link_div">
                <NavLink to="/contact" className={({ isActive }) => isActive ? "link_decoration_active" : "link_decoration"}>
                    Contact
                </NavLink>
            </div>
        </div >
    )
}
