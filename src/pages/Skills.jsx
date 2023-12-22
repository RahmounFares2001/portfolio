import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import TechnicalSkills from "./Skills/TechnicalSkills";
import SoftSkills from "./Skills/SoftSkills";


export default function Skills(){
    // active skills
    const [active, setActive] = useState("active1");

    // active btn
    const [coloredBtn, setColoredBtn] = useState("tech");

    const btnId = (id) => {
        setColoredBtn(id)
    };
    const hoverStyle = "bg-gradient-to-l from-red-950 to-transparent text-gray-300 transition-colors duration-1000";
    const coloringBtn = (id) => {
        return coloredBtn === id ? hoverStyle : ""
    };

    return(
        <div className="mt-16 flex flex-col  items-center  animate-slideIn">
            <div className="lg:w-7/12 sm:w-8/12 w-11/12 flex justify-center">
                <button className={`lg:w-4/6 lg:h-14 sm:h-14 h-12 w-4/5 border-2 md:text-xl text-base
                    border-gray-600 bg-gradient-to-r from-gray-400 to-transparent hover:bg-gradient-to-l
                    hover:from-red-950 hover:to-transparent text-gray-950 hover:text-gray-400
                        hover:transition-colors hover:duration-1000 cursor-pointer ${coloringBtn('tech')}`}
                        onClick={()=>{
                            btnId("tech");
                            setActive("active1");
                        }} >Technical skills</button>
                <button className={`lg:w-4/6 lg:h-14 sm:h-14 h-12 w-4/5 border-2 md:text-xl text-base
                    border-gray-600 bg-gradient-to-r from-gray-400 to-transparent hover:bg-gradient-to-l
                    hover:from-red-950 hover:to-transparent text-gray-950 hover:text-gray-400
                        hover:transition-colors hover:duration-1000 cursor-pointer ${coloringBtn('soft')}`}
                        onClick={()=>{
                            btnId("soft");
                            setActive("active2")
                        }} >Soft skills</button>
            </div>

            {active === "active1" && <TechnicalSkills />}
            {active === "active2" && <SoftSkills /> }
          
        </div>
    )
}