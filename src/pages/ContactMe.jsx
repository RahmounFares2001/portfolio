import React, { useState } from "react";



export default function ContactMe() {
    
  
    return(
        <div className="flex justify-center text-2xl mt-14 animate-fade-in">
            <form action="" className="flex flex-col items-center gap-8 sm:w-4/5 w-full" > 
                <input type="text" placeholder="Full name"
                className="lg:w-2/5 w-4/5 bg-gray-100 p-5 sm:p-3 text-gray-800 border-2 border-gray-600
                text-base sm:text-2xl" required />
                <input type="email" placeholder="Email"
                className="lg:w-2/5 w-4/5 bg-gray-100 p-5 sm:p-3 text-gray-800 border-2 border-gray-600
                text-base sm:text-2xl" required />
                <textarea type="message" rows="5" placeholder="Your Message"
                className="lg:w-2/5 w-4/5 bg-gray-100 p-5 sm:p-3 text-gray-800 border-2 border-gray-600
                text-base sm:text-2xl" required />

                <button className="lg:w-2/5 lg:h-14 h-14 w-4/5 border-2 
                border-gray-600 bg-gradient-to-r from-gray-400 to-transparent hover:bg-gradient-to-l
                 hover:from-red-950 hover:to-transparent text-gray-950 hover:text-gray-400
                    hover:transition-colors hover:duration-1000 cursor-pointer active:animate-fade-in" >Sumbit</button>
            </form>
        </div>
    )
};