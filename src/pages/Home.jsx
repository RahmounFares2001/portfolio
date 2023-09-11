import React, { useState, useEffect, useRef } from "react";
import Typed from 'typed.js';

// import Typed from "react-typed";
// "react-typed": "^1.2.0", 

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
    const [isExponded, setExpended] = useState(true);

    function handelExpend() {
        setExpended(true);
    }


    // types
    const typedRef = useRef(null);

    const options = {
        strings: ['Rahmoun Fares', 'Frontend dev'],
        typeSpeed: 100,
        backSpeed: 40,
        loop: true,
      };

      useEffect(() => {
        const typed = new Typed(typedRef.current, options);
      });

 
     
 
    return(
        <div className="flex justify-center md:flex-row animate-fade-in lg:mt-10 lg:gap-48 md:mt-16 md:gap-32
        sm:gap-10 sm:mt-10 sm:ml-20 mt-8 ">
            <div className="flex flex-col md:mt-12 sm:mt-10 mt-10">
                <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-xl sm:text-s"><span ref={typedRef}></span>
                {/* <Typed
                strings={[
                    'Rahmoun Fares',
                    'Frontend dev'
                ]}
                typeSpeed={100}
                backSpeed={40}
                loop={Infinity}
                /> */}
          
               </h1>
                <p className="md:mt-12 sm:mt-4 mt-2 flex justify-center lg:text-xl md:text-lg sm:text-lg text-xs/4">Information systems engineering student</p>

                <div>
                    {isExponded? 
                    <SocialMedia />: 
                    <div onClick={handelExpend}
                    className="text-center lg:text-5xl md:mt-16 sm:mt-8 mt-8 bg-gradient-to-r from-gray-400 to-transparent
                    h-16 rounded-lg hover:bg-gradient-to-l hover:from-red-950 hover:to-transparent
                    text-gray-950 hover:text-gray-400
                    hover:transition-colors hover:duration-1000 cursor-pointer active:animate-fade-in"
                            ><span>My Accounts</span></div>
                    }
                    
                    
                </div>
            </div>

            <div className="flex justify-center">
                <img src={photo} alt="homeLogo" className="my-pic lg:w-96 md:w-72 md:mt-7 sm:w-48 sm:mt-3 w-32 mt-12 mr-24
                " style={picStyle} /> 
            </div>
        </div>
    )
};
