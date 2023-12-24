import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";


import NavLinks from "./NavLinks";
import Footer from "../pages/Footer";

// material-ui
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// images
// import logo from "../assets/images/logo.jpg";

// styles
import styles from "./styles/styles.css"
import { color } from "framer-motion";

export default function HeaderLayout() {

    // responsive
    const [isShowed, setShowed] = useState(false);

    function showMenu() {
        setShowed(!isShowed);
    }

    // active section
    const [active, setActive] = useState("home");

    const btnId = (id) => {
        setActive(id)
    };

    const activeStyle = "text-red-500 font-bold border-b border-red-600 transition-colors duration-1000"
    const coloring = (id) => {
        return active === id ? activeStyle : "";
    };

    const activeStyleResponsive = "text-red-500 font-bold transition-colors duration-1000";
    const coloringResponsive = (id) => {
        return active === id ? activeStyleResponsive : "";
    };

    return(
        <div>
            <header className="w-screen text-white animate-slideIn">
                <div className="flex md:hidden justify-end" onClick={showMenu}>
                    {isShowed? <div className="animate-slideIn"><CloseIcon className="menu" /></div> :
                    <div className="animate-fade-in"><MenuIcon className="menu" /></div>}
                </div>
            
                <div className="flex justify-start text-lg">
                <div className="tracking-widest lg:gap-12 md:gap-12 md:ml-4 md:mt-4
                    hidden md:flex
                    "> 

                        <NavLink to="/" className={`hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600  text-center hover:transition-colors hover:duration-1000 
                          lg:w-16 md:w-12 pb-2 ${coloring("home")}`} onClick={()=> {
                            btnId("home");
                          }}>Home</NavLink>

                        <NavLink to="/projects" className={`hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600 text-center hover:transition-colors hover:duration-1000
                         lg:w-24 md:w-24 ${coloring("projects")}`} onClick={()=>{
                            btnId("projects")
                         }}>Projects</NavLink>

                        <NavLink to="/resume" className={`hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600  text-center hover:transition-colors hover:duration-1000
                         lg:w-20 md:w-16 ${coloring("resume")}`} onClick={()=>{
                            btnId("resume")
                         }}>Resume</NavLink>

                        <NavLink to="/about" className={`hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600  text-center hover:transition-colors hover:duration-1000
                          lg:w-20 md:w-16 ${coloring("about")}`} onClick={()=> {
                            btnId("about")
                          }}>About</NavLink>

                        <NavLink to="/skills" className={`hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600  text-center hover:transition-colors hover:duration-1000
                         lg:w-20 md:w-16 ${coloring("skills")}`} onClick={()=> {
                            btnId("skills")
                         }}>skills</NavLink>

                         <NavLink to="/contactMe" className={`hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600  text-center hover:transition-colors hover:duration-1000
                         lg:w-20 md:w-16 ${coloring("contactMe")}`} onClick={() => {
                            btnId("contactMe")
                         }}>Contact</NavLink>

                    </div>
                </div>
            </header>
            {isShowed? <div className="tracking-widest
                    md:hidden flex flex-col gap-8 text-4xl animate-fade-in
                    "> 

                        <NavLink to="/" className={` hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600  text-center hover:transition-colors hover:duration-1000 
                          lg:w-16 md:w-12  animate-responsive-menu1 ${coloringResponsive("home")}`} onClick={()=>{
                            showMenu();
                            btnId("home")
                          }}>Home</NavLink>

                        <NavLink to="/projects" className={`hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600 text-center hover:transition-colors hover:duration-1000
                         lg:w-24 md:w-24 opacity-0 animate-responsive-menu2 ${coloringResponsive("projects")}`} onClick={()=>{
                            showMenu()
                            btnId("projects")}}>Projects</NavLink>

                        <NavLink to="/resume" className={`hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600  text-center hover:transition-colors hover:duration-1000
                         lg:w-20 md:w-16 opacity-0 animate-responsive-menu3 ${coloringResponsive("resume")}`} onClick={()=> {
                            showMenu()
                            btnId("resume")}}>Resume</NavLink>

                        <NavLink to="/about" className={`hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600  text-center hover:transition-colors hover:duration-1000
                          lg:w-20 md:w-16 opacity-0 animate-responsive-menu4 ${coloringResponsive("about")}`} onClick={()=> {
                            showMenu()
                            btnId("about")}}>About</NavLink>

                        <NavLink to="/skills" className={`hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600  text-center hover:transition-colors hover:duration-1000
                         lg:w-20 md:w-16 opacity-0 animate-responsive-menu5 ${coloringResponsive("skills")}`} onClick={()=> {
                            showMenu()
                            btnId("skills")}}>skills</NavLink>

                         <NavLink to="/contactMe" className={`hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600  text-center hover:transition-colors hover:duration-1000
                         lg:w-20 md:w-16 opacity-0 animate-responsive-menu6 ${coloringResponsive("contactMe")}`} onClick={()=>{
                            showMenu()
                            btnId("contactMe")}}>Contact</NavLink>

                    </div>:
            <main>
                <Outlet />
                <Footer />
            </main> }
        </div>
    )
};