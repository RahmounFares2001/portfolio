import React, { useState, useEffect, useRef } from "react";

// import typed
import Typed from 'typed.js';

// layout
import SocialMedia from "../layout/SocialMedia";



// images
import photo from "../assets/images/photo.jpg"

// styles
import pagesStyles from "./styles/pagesStyles.css";


export default function Home(){

    // photo style
    const picStyle = {
        borderRadius: '34% 64% 77% 26% / 73% 54% 45% 19%',
      };


    // social media expended
    const [isExponded, setExpended] = useState(false);

    function handelExpend() {
        setExpended(true);
    }


    // typed
    const typedRef = useRef(null);

    const options = {
        strings: ['Rahmoun Fares', 'Frontend dev'],
        typeSpeed: 100,
        backSpeed: 40,
        loop: true,
      };

      useEffect(() => {
        const typed = new Typed(typedRef.current, options);
        return () => {
          typed.destroy();
        };
      }, []); 

 
     
 
    return(
        <div className="flex justify-center flex-col lg:flex-row animate-fade-in lg:mt-10 lg:gap-48 md:mt-16 gap-32
         mt-8 ">
            <div className="flex justify-center flex-col md:mt-12 sm:mt-10 mt-10">
                <h1 className="lg:text-5xl md:text-7xl sm:text-6xl text-4xl text-center">
                    <span ref={typedRef}></span>
               </h1>
                <p className="md:mt-12 sm:mt-4 mt-2 flex justify-center lg:text-xl md:text-3xl sm:text-2xl text-base">Information systems engineering student</p>

                <div className="flex justify-center items-center">
                    {isExponded? 
                    <SocialMedia />: 
                    <div onClick={handelExpend}
                    className="text-center  lg:text-5xl md:text-6xl sm:text-5xl text-4xl mt-16
                    lg:w-full sm:w-96 w-80
                    bg-gradient-to-r from-gray-400 to-transparent
                    h-16 rounded-lg hover:bg-gradient-to-l hover:from-red-950 hover:to-transparent
                    text-gray-950 hover:text-gray-400
                    hover:transition-colors hover:duration-1000 cursor-pointer active:animate-fade-in"
                            ><span>My Accounts</span></div>
                    }
                    
                    
                </div>
            </div>

            <div className="flex justify-center items-center">
                <img src={photo} alt="homeLogo" className="flex flex-center w-3/5 lg:w-96 lg:h-96 
                " style={picStyle} /> 
            </div>
        </div>
    )
};
