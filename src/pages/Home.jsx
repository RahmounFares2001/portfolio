import React from "react";

import Typed from "react-typed";

// material-ui
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

// images
// import homeLogo from "../assets/images/homeLogo.jpg";
import homeLogo from "../assets/images/photo.jpg"

// styles
import pagesStyles from "./styles/pagesStyles.css";


export default function Home(){

    const picStyle = {
        borderRadius: '34% 64% 77% 26% / 73% 54% 45% 19%',
      };
      
 
    return(
        <div className="flex justify-center sm:flex-row flex-col animate-fade-in lg:mt-10 lg:gap-20 md:mt-8 md:gap-10
         md:ml-24 sm:gap-10 sm:mt-10 sm:ml-20 mt-8 ">
            <div className="flex flex-col md:mt-12 sm:mt-10 mt-10">
                <h1 className="lg:text-5xl md:text-4xl md:ml-10 sm:text-3xl text-xl sm:text-start text-center"> 
                <Typed
                strings={[
                    'Rahmoun Fares',
                    'Frontend dev'
                ]}
                typeSpeed={100}
                backSpeed={40}
                loop={Infinity}
                />
          
               </h1>
                <p className="md:mt-8 sm:mt-4 mt-2 flex justify-center lg:text-xl md:text-base sm:text-sm text-xs/4">Information systems engineering student</p>

                <div>
                    <ul className="flex flex-row justify-center md:mt-14 sm:mt-8 mt-8 lg:gap-10 md:gap-8 sm:gap-6 gap-2 " > 
                        <li><a className="hover:shadow-lg hover:shadow-blue-800" href="https://www.linkedin.com/in/fares-rahmoun-018674257/" target="_blank"> <LinkedInIcon className="social linkedIn" /> </a> </li>
                        <li><a className="hover:shadow-lg hover:shadow-white" href="https://github.com/RahmounFares2001" target="_blank"> <GitHubIcon className="social git" /> </a> </li>
                        <li><a className="hover:shadow-lg hover:shadow-blue-800" href="https://t.me/Faresrahmoun" target="_blank"> <TelegramIcon className="social telegram"  /> </a> </li>
                        <li><a className="hover:shadow-lg hover:shadow-blue-800" href="https://www.facebook.com/profile.php?id=100006340122907" target="_blank"> <FacebookIcon className="social fb" /> </a> </li>
                        <li><a className="hover:shadow-lg hover:shadow-red-900" href="https://www.instagram.com/fares_rahmoun/?hl=ar" target="_blank"> <InstagramIcon className="social insta" /> </a> </li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-center">
                <img src={homeLogo} alt="homeLogo" className="lg:w-96 md:w-60 md:mt-7 sm:w-48 sm:mt-3 w-32 mt-12
                " style={picStyle} />
            </div>
        </div>
    )
};
