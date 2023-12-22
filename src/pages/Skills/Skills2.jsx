import React from "react";



export default function Skills(){

    return(
        <div className="mt-16 flex flex-col  items-center  animate-slideIn">  
            <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl">Skills</h1>

            <div className="flex flex-row lg:gap-20 md:text-lg lg:mt-10 md:gap-16 md:mt-8
            sm:gap-10 sm:mt-6 gap-8 text-base mt-5"> 
                <div>
                    <div>
                        <h1>JavaScript</h1>
                        <div className="lg:w-80 lg:h-6 md:w-72 md:h-5 md:mt-1 sm:w-56 sm:h-5 sm:mt-1 w-36 h-4 mt-1 bg-gray-400 rounded-md "><div className="h-full w-4/5 bg-red-700 rounded-s-md
                        animated-bar80"></div></div>
                    </div>
                    <div>
                        <h1 className="mt-4">React js</h1>
                        <div className="lg:w-80 lg:h-6 md:w-72 md:h-5 md:mt-1 sm:w-56 sm:h-5 sm:mt-1 w-36 h-4 mt-1 bg-gray-400 rounded-md"><div className="h-full w-3/5 bg-red-700 rounded-s-md 
                        animated-bar70"></div></div>
                    </div>
                    <div>
                        <h1 className="mt-4">Tailwind</h1>
                        <div className="lg:w-80 lg:h-6 md:w-72 md:h-5 md:mt-1 sm:w-56 sm:h-5 sm:mt-1 w-36 h-4 mt-1 bg-gray-400 rounded-md"><div className="h-full w-3/5 bg-red-700 rounded-s-md 
                        animated-bar80"></div></div>
                    </div>
                    <div>
                        <h1 className="mt-4">HTML/CSS</h1>
                        <div className="lg:w-80 lg:h-6 md:w-72 md:h-5 md:mt-1 sm:w-56 sm:h-5 sm:mt-1 w-36 h-4 mt-1 bg-gray-400 rounded-md"><div className="h-full w-4/5 bg-red-700 rounded-md
                        animated-bar100 "></div></div>
                    </div>
                </div>

                <div>
                    <div>
                        <h1>Postgresql</h1>
                        <div className="lg:w-80 lg:h-6 md:w-72 md:h-5 md:mt-1 sm:w-56 sm:h-5 sm:mt-1 w-36 h-4 mt-1 bg-gray-400 rounded-md"><div className="h-full w-4/5 bg-red-700 rounded-s-md
                        animated-bar80"></div></div>
                    </div>
                    <div>
                        <h1 className="mt-4">Typescript</h1>
                        <div className="lg:w-80 lg:h-6 md:w-72 md:h-5 md:mt-1 sm:w-56 sm:h-5 sm:mt-1 w-36 h-4 mt-1 bg-gray-400 rounded-md"><div className="h-full w-4/5 bg-red-700 rounded-s-md
                        animated-bar40 "></div></div>
                    </div>
                    <div>
                        <h1 className="mt-4">Java</h1>
                        <div className="lg:w-80 lg:h-6 md:w-72 md:h-5 md:mt-1 sm:w-56 sm:h-5 sm:mt-1 w-36 h-4 mt-1 bg-gray-400 rounded-md"><div className="h-full w-2/5 bg-red-700 rounded-s-md 
                        animated-bar40"></div></div>
                    </div>
                    <div>
                        <h1 className="mt-4">Python</h1>
                        <div className="lg:w-80 lg:h-6 md:w-72 md:h-5 md:mt-1 sm:w-56 sm:h-5 sm:mt-1 w-36 h-4 mt-1 bg-gray-400 rounded-md"><div className="h-full w-2/5 bg-red-700 rounded-s-md 
                        animated-bar40"></div></div>
                    </div>
                </div>
            </div>
          
        </div>
    )
}