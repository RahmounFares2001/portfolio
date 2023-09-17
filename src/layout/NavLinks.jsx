import React from "react";
import { NavLink } from "react-router-dom";


export default function NavLinks() {


    return(
        <div>
            <div className="tracking-widest
                    md:hidden flex flex-col gap-8 text-4xl animate-fade-in
                    "> 

                        <NavLink to="/" className=" hover:text-red-500 hover:font-bold hover:border-b
                         hover:border-red-600  text-center hover:transition-colors hover:duration-1000 
                          lg:w-16 md:w-12 ">Home</NavLink>

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

    )
};