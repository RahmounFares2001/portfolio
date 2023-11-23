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
                <ul className="flex flex-col gap-5" >
                    <div className="grid justify-center lg:grid-cols-4 grid-cols-2 mt-20 lg:gap-1 md:gap-32 sm:gap-20 gap-16 
                animate-slideIn">
                        <div className="social-btn link-hover flex flex-col items-center">
                            <li><a className="hover:shadow-lg hover:shadow-blue-800 shadow-lg shadow-blue-800 lg:shadow-none transition duration-1000 ease-in-out hover:scale-80" href="https://www.linkedin.com/in/fares-rahmoun-018674257/" target="_blank" rel="noreferrer"> <LinkedInIcon className="social linkedIn" /> </a></li>
                            <div className="name linkdd bg-blue-900 rounded-md opacity-0 text-lg p-1 hidden lg:block">Rahmoun Fares</div>
                        </div> 
                        <div className="social-btn git-hover flex flex-col items-center gap-3">
                            <li><a className="hover:shadow-lg hover:shadow-white shadow-lg shadow-white lg:shadow-none transition duration-1000 ease-in-out hover:scale-80" href="https://github.com/RahmounFares2001" target="_blank" rel="noreferrer"> <GitHubIcon className="social git" /> </a> </li>
                            <div className="name gitt bg-gray-400 text-black rounded-md opacity-0 text-lg p-1 hidden lg:block">RahmounFares2001</div>
                        </div>
                        <div className="social-btn insta-hover flex flex-col items-center gap-3">
                            <li><a className="hover:shadow-lg hover:shadow-red-900 shadow-lg shadow-red-900 lg:shadow-none transition duration-1000 ease-in-out hover:scale-80" href="https://www.instagram.com/fares_rahmoun/?hl=ar" target="_blank" rel="noreferrer"> <InstagramIcon className="social insta" /> </a> </li>
                            <div className="name instt bg-red-900 rounded-md opacity-0 text-lg p-1 hidden lg:block">Rahmoun Fares</div>
                        </div>
                        <div className="social-btn yout-hover flex flex-col items-center gap-3">
                            <li><a className="hover:shadow-lg hover:shadow-red-600 shadow-lg shadow-red-600 lg:shadow-none transition duration-1000 ease-in-out hover:scale-80" href="https://www.youtube.com/channel/UChjrPP4-D9fBtSEsGFUpmrw" target="_blank" rel="noreferrer"> <YouTubeIcon className="social youtube" /> </a> </li>
                            <div className="name youtt bg-red-900 rounded-md opacity-0 text-lg p-1 hidden lg:block">Rahmoun Fares</div>
                        </div>
                    </div>

               
                </ul>
                <div className= "lg:justify-center hidden lg:grid lg:grid-cols-6 text-center text-sm mt-3">
                    
                </div>
            
            </div>
        )
    }