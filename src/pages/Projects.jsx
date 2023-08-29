import React from "react";


// images
import keeper from "../assets/images/keeper.jpg";


export default function Projects(){
    return(
        <div className="flex justify-center items-center md:justify-start md:items-start">
            <div className="flex mt-20 md:ml-20 animate-fade-in lg:w-2/5 md:w-72 sm:w-72 w-4/5 h-auto
            ">
                <div className="lg:h-96 md:h-72 sm:h-72 flex justify-center items-center 
                gap-16 border-red-900 border-2 rounded-lg
                hover:bg-red-950 hover:shadow-lg hover:shadow-white hover:border-white">
                    <div className="lg:w-4/5 md:w-4/5 sm:w-4/5 w-4/5 ">
                        <h1 className="text-center lg:text-xl md:text-xs sm:text-xs/4 text-xs/2 mt-5">Keeper app 📝</h1>
                        <p className="lg:text-sm md:text-xs lg:mt-6 lg:mb-8 md:mt-4 md:mb-6 sm:mt-3 sm-mb-5
                        mt-3 mb-5 text-xs/4">Built using ReactJS for the frontend and styled with pure CSS. The app's responsive design ensures a seamless experience whether you are on a desktop, tablet, or smartphone.📝 Stay organized by categorizing your notes. Whether it's personal, work-related, or creative ideas .</p>
                        <div className="flex lg:gap-10 md:gap-8 sm:gap-7 justify-center mb-5 gap-6" >
                            <a className="lg:text-lg lg:w-32 lg:h-10 md:text-sm md:w-24 md:h-8 sm:text-xs sm:w-16
                            text-xs/4 w-16 h-6 
                            bg-white text-black  text-center rounded-lg
                            hover:bg-red-900 hover:text-white hover:shadow-md hover:shadow-white"
                            target="_blank" href="https://keeper-nu-nine.vercel.app/">
                                <p className="lg:mt-1 md:mt-2 mt-1">View site</p></a>
                            <a className="lg:text-lg lg:w-32 lg:h-10 md:text-sm md:w-24 md:h-8 sm:text-xs/3 sm:w-24
                            w-20 text-xs/4
                            bg-white text-black text-center rounded-lg
                            hover:bg-red-900 hover:text-white hover:shadow-md hover:shadow-white"
                            target="_blank" href="https://github.com/RahmounFares2001/keeper">
                                <p className="lg:mt-1 md:mt-2 mt-1">Github repo</p></a>
                        </div>
                    </div>
                    {/* <img src={keeper} alt="Keeper" className="lg:w-2/5 lg:h-72 md:w-64 md:h-64 border-red-900 border-2 rounded-lg" /> */}
                </div>
            
            </div>

        </div>
    )
}