import React from "react";

// material-ui
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function SocialMedia() {
    

    return(
        <div> 
            <ul className="grid grid-flow-col justify-center grid-rows-2 md:mt-14 sm:mt-8 mt-8 lg:gap-14 md:gap-8 sm:gap-6 gap-2 
            animate-fade-in2" > 
                        <li><a className="hover:shadow-lg hover:shadow-blue-800 transition duration-1000 ease-in-out hover:scale-80" href="https://www.linkedin.com/in/fares-rahmoun-018674257/" target="_blank" rel="noreferrer"> <LinkedInIcon className="social linkedIn" /> </a> </li>
                        <li><a className="hover:shadow-lg hover:shadow-white transition duration-1000 ease-in-out hover:scale-80" href="https://github.com/RahmounFares2001" target="_blank" rel="noreferrer"> <GitHubIcon className="social git" /> </a> </li>
                        <li><a className="hover:shadow-lg hover:shadow-blue-800 transition duration-1000 ease-in-out hover:scale-80" href="https://t.me/Faresrahmoun" target="_blank" rel="noreferrer"> <TelegramIcon className="social telegram"  /> </a> </li>
                        <li><a className="hover:shadow-lg hover:shadow-blue-800 transition duration-1000 ease-in-out hover:scale-80" href="https://www.facebook.com/profile.php?id=100006340122907" target="_blank" rel="noreferrer"> <FacebookIcon className="social fb" /> </a> </li>
                        <li><a className="hover:shadow-lg hover:shadow-red-900 transition duration-1000 ease-in-out hover:scale-80" href="https://www.instagram.com/fares_rahmoun/?hl=ar" target="_blank" rel="noreferrer"> <InstagramIcon className="social insta" /> </a> </li>
                        <li><a className="hover:shadow-lg hover:shadow-red-600 transition duration-1000 ease-in-out hover:scale-80" href="https://www.youtube.com/channel/UChjrPP4-D9fBtSEsGFUpmrw" target="_blank" rel="noreferrer"> <YouTubeIcon className="social youtube" /> </a> </li>
            </ul>
        </div>
    )
}