import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import NavLinks from "./NavLinks";

// material-ui
import MenuIcon from '@mui/icons-material/Menu';

// images
// import logo from "../assets/images/logo.jpg";

// styles
import styles from "./styles/styles.css"

export default function HeaderLayout() {

    const [isShowed, setShowed] = useState(false);

    function showMenu() {
        setShowed(!isShowed);
    }

    return(
        <div>
            <header className="w-screen text-white animate-fade-in ">
                <div className="flex md:hidden justify-end tr" onClick={showMenu}><MenuIcon className="menu" /></div>
            
                <div className="flex justify-start text-lg">
                <div className="tracking-widest lg:gap-12 md:gap-12 md:ml-4 md:mt-4
                    hidden md:flex
                    "> 

                        <NavLink to="/" className=" hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600  text-center hover:transition-colors hover:duration-1000 
                          lg:w-16 md:w-12 pb-2">Home</NavLink>

                        <NavLink to="/projects" className="hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600 text-center hover:transition-colors hover:duration-1000
                         lg:w-24 md:w-24">Projects</NavLink>

                        <NavLink to="/resume" className="hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600  text-center hover:transition-colors hover:duration-1000
                         lg:w-20 md:w-16">Resume</NavLink>

                        <NavLink to="/about" className="hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600  text-center hover:transition-colors hover:duration-1000
                          lg:w-20 md:w-16">About</NavLink>

                        <NavLink to="/skills" className="hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600  text-center hover:transition-colors hover:duration-1000
                         lg:w-20 md:w-16">skills</NavLink>

                         <NavLink to="/contactMe" className="hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600  text-center hover:transition-colors hover:duration-1000
                         lg:w-20 md:w-16">Contact</NavLink>

                    </div>
                </div>
            </header>
            {isShowed? <div className="tracking-widest
                    md:hidden flex flex-col gap-8 text-4xl animate-fade-in
                    "> 

                        <NavLink to="/" className=" hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600  text-center hover:transition-colors hover:duration-1000 
                          lg:w-16 md:w-12 " onClick={showMenu}>Home</NavLink>

                        <NavLink to="/projects" className="hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600 text-center hover:transition-colors hover:duration-1000
                         lg:w-24 md:w-24" onClick={showMenu}>Projects</NavLink>

                        <NavLink to="/resume" className="hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600  text-center hover:transition-colors hover:duration-1000
                         lg:w-20 md:w-16" onClick={showMenu}>Resume</NavLink>

                        <NavLink to="/about" className="hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600  text-center hover:transition-colors hover:duration-1000
                          lg:w-20 md:w-16" onClick={showMenu}>About</NavLink>

                        <NavLink to="/skills" className="hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600  text-center hover:transition-colors hover:duration-1000
                         lg:w-20 md:w-16" onClick={showMenu}>skills</NavLink>

                         <NavLink to="/contactMe" className="hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600  text-center hover:transition-colors hover:duration-1000
                         lg:w-20 md:w-16" onClick={showMenu}>Contact</NavLink>

                    </div>:
            <main>
                <Outlet />
            </main> }
        </div>
    )
};