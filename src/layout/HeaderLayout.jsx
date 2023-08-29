import React from "react";
import { NavLink, Outlet } from "react-router-dom";

// material-ui


// images
import logo from "../assets/images/logo.jpg";


export default function HeaderLayout() {
    return(
        <div>
            <header className="w-screen text-white animate-fade-in lg:text-base md:text-sm sm:text-sm/5 
            text-xs/2">
                <div className="flex justify-start">
                    {/* <img src={logo} alt="logo" className="mt-5 ml-5 lg:w-28 md:w-24 sm:w-16 sm:mt-7 w-20 " /> */}
                    <div className="sm:mt-8 sm:ml-10 flex tracking-widest lg:gap-12 md:gap-10 sm:gap-6 gap-2 ml-4 mt-4">

                        <NavLink to="/" className=" hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600  text-center hover:transition-colors hover:duration-1000 
                          lg:w-16 md:w-12">Home</NavLink>

                        <NavLink to="projects" className="hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600 text-center hover:transition-colors hover:duration-1000
                         lg-w-24 md-20">Projects</NavLink>

                        <NavLink to="resume" className="hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600  text-center hover:transition-colors hover:duration-1000
                         lg:w-20 md:w-16">Resume</NavLink>

                        <NavLink to="about" className="hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600  text-center hover:transition-colors hover:duration-1000
                          lg:w-20 md:w-16">About</NavLink>

                        <NavLink to="skills" className="hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600  text-center hover:transition-colors hover:duration-1000
                         lg:w-20 md:w-16">skills</NavLink>

                    </div>
                </div>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
};