import React, { useRef, useEffect } from "react";

import Divs from "./Divs";

// images
import car_rental from "../../assets/images/car_rental.png"
import elstar from "../../assets/images/elstar.png"
import keeper from "../../assets/images/keeper.png"

export default function Projects() {

  
  const project = [
                {
                    id : 1,
                    namee :"Car rental 🚗",
                    details : "Explore our car rental website built with React and styled using CSS. Discover reliable, hassle-free transportation options with our wide selection of high-quality vehicles, catering to all your travel requirements.",
                    viewSite : "https://carrental-orcin.vercel.app/",
                    githubRepo : "https://github.com/RahmounFares2001",
                    img : car_rental
            
                },
                {
                  id : 2,
                  namee :"Elstar clone 😇",
                  details : "Successfully cloned the Elstar website using React and Tailiwnd css, replicating its design and functionality for a seamless user experience.",
                  viewSite : "c",
                  githubRepo : "https://github.com/RahmounFares2001",
                  img : elstar
          
                },
                {
                    id : 3,
                    namee : "Keeper app 📝",
                    details : "Developed with ReactJS and styled using CSS, this app offers a responsive design for a seamless experience across devices. It allows you to categorize and organize your notes, be it for personal, work, or creative purposes.",
                    viewSite : "https://keeper-nu-nine.vercel.app/",
                    githubRepo : "https://github.com/RahmounFares2001/keeper",
                    img : keeper
                },
                {
                    id:4,
                    namee: "CV generator",
                    details: "Creating a user-friendly website for effortless CV creation, input personal/professional details, and auto-generate well-structured CVs, streamlining job applications.",
                    viewSite: "c",
                    githubRepo: "https://github.com/RahmounFares2001",
                    img : ""
                }
  ];

  return (
    <div className="flex flex-col">
      {project.map((proj, index) => (
        <Divs key={proj.id} project={proj} index={index} />
      ))}
    </div>
  );
}

