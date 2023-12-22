import React from "react";

// images
import resume from "../assets/images/resume.jpg";

export default function Resume(){
    return(
        <div className="flex flex-col items-center animate-fade-in mb-10">
            {/* pdf hosted by tinny */}
        

            <a href="https://rahmounfares.tiiny.site/" target="_blank" className="border-2 
                border-gray-600 bg-gradient-to-r from-gray-400 to-transparent hover:bg-gradient-to-l
                 hover:from-red-950 hover:to-transparent text-gray-950 hover:text-gray-400
                    hover:transition-colors hover:duration-1000 cursor-pointer
                    lg:w-1/5 lg:h-14 h-14 md:w-2/5 w-3/5 my-6 flex items-center justify-center
            transition duration-300 ease-in-out animate-fade-in" > 
                <p className="lg:text-lg md:text-xl sm:text-lg text-base"> View in Google docs </p></a>

            <img src={resume} alt="resume" className="lg:w-3/5 lg:h-4/5 md:w-4/5 w-4/5" /> 
        </div>
    )
}