import React from "react";

// images
import resume from "../assets/images/resume.jpg";

export default function Resume(){
    return(
        <div className="flex flex-col items-center mb-20 animate-fade-in">
            {/* pdf hosted by tinny */}
        

            <a href="https://rahmounfares.tiiny.site/" target="_blank" className="bg-red-700  text-center 
            rounded-lg hover:bg-slate-400 hover:text-black hover:transition-colors hover:duration-500
            hover:shadow-2xl hover:shadow-red-600 lg:my-12 lg:w-60 lg:h-14 sm:w-2/5 w-3/5 h-14
            my-6
            transition duration-300 ease-in-out" > 
                <p className="lg:mt-3 lg:text-lg md:mt-2 md:text-xl sm:text-lg sm:mt-2 text-lg mt-2"> View in Google docs </p></a>

            <img src={resume} alt="resume" className="lg:w-3/5 lg:h-4/5 md:w-4/5 w-4/5" /> 
        </div>
    )
}