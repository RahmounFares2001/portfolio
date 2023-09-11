import React from "react";

// images
import resume from "../assets/images/resume.jpg";

export default function Resume(){
    return(
        <div className="flex flex-col items-center animate-fade-in">
            {/* pdf hosted by tinny */}
            <a href="https://rahmounfares.tiiny.site/" target="_blank" className="bg-red-700  text-center 
            rounded-lg hover:bg-slate-400 hover:text-black hover:transition-colors hover:duration-500
            hover:shadow-2xl hover:shadow-red-600 lg:my-12 lg:w-60 lg:h-14 md:my-10 md:w-52 md:h-12
            sm:my-8 sm:w-48 sm:h-10 my-6 w-36 h-8
            transition duration-300 ease-in-out" > 
                <p className="lg:mt-3 lg:text-lg md:mt-3 md:text:base sm:text-sm sm:mt-2 text-xs mt-2"> View in Google docs </p></a>

            <img src={resume} alt="resume" className="block lg:w-3/5 lg:h-4/5 md:w-3/5 md:h-3/5 sm:w-3/5 w-3/5 " /> 
        </div>
    )
}