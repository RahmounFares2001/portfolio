import React from "react";


//images
import photo from "../assets/images/photo.jpg";


export default function About(){

    return(
        <div className="flex justify-center animate-fade-in">
            <div className="flex flex-col lg:flex-row lg:h-96 lg:w-3/5 lg:gap-14 lg:mt-20 md:flex-row md:h-72 md:w-3/5 md:gap-7 md:mt-16 md:pl-4
            sm:h-60 sm:w-3/5 sm-gap-6 sm:pl-2 sm:mt-16 sm:flex-row h-auto w-4/5  pl-1
             cursor-pointer  justify-center items-center  border-2 border-red-900 
            hover:bg-red-950 hover:border-white rounded-lg hover:shadow-lg hover:shadow-white">
                <img src={photo} alt="photo" className="lg:w-72 md:w-32 sm:w-32 sm:mr-7 w-24 
                rounded-full border-red-900 border-2 shadow-2xl shadow-red-950" />

                <div className="lg:w-96 md:w-80 md:pr-4 sm:w-52 w-auto">
                    <h1 className="lg:text-4xl md:text-3xl sm:text-xl text-base pt-3 text-center">About me</h1>
                    <h2 className="lg:text-base lg:mt-6 md:text-xs md:mt-4 sm:text-xs/4 sm:mt-2 text-xs/4 pb-3">I m Rahmoun Fares 22 years old from Algeria and i m currently information system engineering student (4/5) in the national polytechnic school of Algeria and also i m a junior frontend developer . I m simply enjoy writing codes learning new technologies .</h2>
                </div>
            </div>
        </div>
    )
}