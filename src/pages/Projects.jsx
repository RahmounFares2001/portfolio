import React from "react";




// images
// import keeper from "../assets/images/keeper.jpg";


export default function Projects() {

    const project = [
      
        {
            id : 1,
            namee :"Car rental 🚗",
            details : "Car rental website using React and css for styling. Do you need reliable, hassle-free transportation options? Look no further! At Car Rental we offer a wide range of high quality vehicles for all your travel needs.",
            viewSite : "https://carrental-orcin.vercel.app/",
            githubRepo : "https://github.com/RahmounFares2001"
    
        },
        {
            id : 2,
            namee : "Keeper app 📝",
            details : "Built using ReactJS for the frontend and styled with pure CSS. The app's responsive design ensures a seamless experience whether you are on a desktop, tablet, or smartphone.📝 Stay organized by categorizing your notes. Whether it's personal, work-related, or creative ideas .",
            viewSite : "https://keeper-nu-nine.vercel.app/",
            githubRepo : "https://github.com/RahmounFares2001/keeper"
        },
    ]

 

    return(
        <div className="flex flex-col mb-20">
              {project.map((proj) => (
                <div className="flex justify-center lg:mr-20">
                    <div className="flex mt-20 flex-col animate-fade-in w-4/5 h-auto
                    bg-gradient-to-r from-red-950 to-transparent">
                        <div className="lg:h-96 md:h-72 sm:h-72 flex justify-center items-center 
                        gap-16 border-red-900 border-2 rounded-lg
                        hover:bg-gradient-to-l hover:from-red-950 hover:to-transparent 
                        hover:shadow-lg hover:shadow-white hover:border-white
                        transition duration-1000 ease-in-out hover:scale-80 ">
                            <div className="w-4/5 ">
                            
                                        <h1 className="text-center lg:text-5xl md:text-4xl sm:text-3xl text-2xl mt-3 mb-5">{proj.namee}</h1>
                                <p className="lg:text-base md:text-base text-sm lg:mt-6 lg:mb-8 md:mt-4 md:mb-6 sm:mt-3 sm-mb-5
                                mt-3 mb-5">Built using ReactJS for the frontend and styled with pure CSS. The app's responsive design ensures a seamless experience whether you are on a desktop, tablet, or smartphone.📝 Stay organized by categorizing your notes. Whether it's personal, work-related, or creative ideas .</p>


                                <div className="flex lg:gap-10 md:gap-8 sm:gap-7 justify-center mb-5 gap-6" >
                                    <a className="md:text-lg lg:w-32 lg:h-10 md:w-32 md:h-10 sm:text-lg sm:w-28 sm:h-10
                                    text-base w-28 h-9 
                                    bg-white text-black  text-center rounded-lg
                                    hover:bg-red-900 hover:text-white hover:shadow-md hover:shadow-white
                                    transition duration-1000 ease-in-out hover:scale-80"
                                    target="_blank" rel="noreferrer" href={proj.viewSite}>
                                        <p className="lg:mt-1 md:mt-2 mt-1">View site</p></a>
                                    <a className="md:text-lg lg:w-32 lg:h-10 md:w-32 md:h-10 sm:text-lg sm:w-28 sm:h-10
                                    text-base w-28 h-9 
                                    bg-white text-black  text-center rounded-lg
                                    hover:bg-red-900 hover:text-white hover:shadow-md hover:shadow-white
                                    transition duration-1000 ease-in-out hover:scale-80"
                                    target="_blank" rel="noreferrer" href={proj.githubRepo}>
                                        <p className="lg:mt-1 md:mt-2 mt-1">Github repo</p></a>
                                </div>
                                
                            </div>
                        
                            {/* <img src={keeper} alt="Keeper" className="lg:w-2/5 lg:h-72 md:w-64 md:h-64 border-red-900 border-2 rounded-lg" /> */}
                        </div>
                    
                    </div>
            </div>
                            
            ))}
        </div>
       
    )
}