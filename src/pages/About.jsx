import React from "react";


//images
import photo from "../assets/images/photo.jpg";


export default function About(){

     // photo style
     const picStyle = {
        borderRadius: '34% 64% 77% 26% / 73% 54% 45% 19%',
      };

    return(
        <div className="flex justify-center animate-fade-in">
            <div className="flex flex-col sm:flex-row lg:h-96 lg:w-3/5 lg:gap-14 lg:mt-20 w-4/5 md:gap-7 md:mt-16 md:pl-4
             sm-gap-6 sm:pl-2 sm:mt-16 h-auto  pl-1 mt-14
             cursor-pointer  justify-center items-center  border-2 border-red-900 
             hover:border-white rounded-lg hover:shadow-lg hover:shadow-white
            bg-gradient-to-r from-red-950 to-transparent
            hover:bg-gradient-to-l hover:from-red-950 hover:to-transparent
            transition duration-1000 ease-in-out hover:scale-80">
                <img src={photo} style={picStyle} alt="pht" className="lg:w-72 md:w-64 sm:my-5 sm:w-60 sm:mr-7 w-48 mt-5 
                border-red-900 border-2 shadow-2xl shadow-red-950" />

                <div className="md:w-96 md:pr-4 sm:w-72 w-auto">
                    <h1 className="lg:text-4xl md:text-4xl sm:text-3xl text-3xl pt-3 text-center">About me</h1>
                    <h2 className="lg:text-base lg:mt-6 md:text-base md:mt-4 sm:text-sm sm:mt-2 text-base pb-3">I am Rahmoun Fares, a 22-year-old student from Algeria, currently pursuing a degree in Information System Engineering (4/5) at the National Polytechnic School of Algeria. I am eager to further expand my knowledge by pursuing a Master 1 in Computer Science at a French university. My passion for technology and coding has led me to become a junior frontend developer, where I enjoy writing code and continually learning new technologies. </h2>
                </div>
            </div>
        </div>
    )
}