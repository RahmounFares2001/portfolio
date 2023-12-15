import React, { useRef, useEffect } from "react";

import { motion, useInView, useAnimation } from "framer-motion";


export default function Divs({ project, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [isInView, controls]);
  
    return (
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100, scale: 1.2 },
          visible: { opacity: 1, y: 0, scale: 1 }
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1, delay: 0 }}
        className="flex justify-center lg:mr-20"
      >
        <div ref={ref} className="flex mt-20 flex-col w-4/5 h-auto bg-gradient-to-r from-red-950 to-transparent rounded-lg">
          <div className="lg:h-96 md:h-72 sm:h-72 flex justify-center items-center gap-16 hover:bg-gradient-to-l hover:from-red-950 hover:to-transparent hover:shadow-lg hover:shadow-white hover:border-white border-red-900 border-2 rounded-lg transition duration-1000 ease-in-out">
            <div className="w-4/5">
              <h1 className="text-center lg:text-5xl md:text-4xl sm:text-3xl text-2xl mt-3 mb-5">{project.namee}</h1>
              <p className="lg:text-base md:text-base text-sm lg:mt-6 lg:mb-8 md:mt-4 md:mb-6 sm:mt-3 sm-mb-5 mt-3 mb-5">{project.details}</p>
              <div className="flex lg:gap-10 md:gap-8 sm:gap-7 justify-center mb-5 gap-6">
                <a className="md:text-lg lg:w-32 lg:h-10 md:w-32 md:h-10 sm:text-lg sm:w-28 sm:h-10 text-base w-28 h-9 bg-white text-black text-center rounded-lg hover:bg-red-900 hover:text-white hover:shadow-md hover:shadow-white transition duration-1000 ease-in-out hover:scale-80" target="_blank" rel="noreferrer" href={project.viewSite}>
                  <p className="lg:mt-1 md:mt-2 mt-1">View site</p>
                </a>
                <a className="md:text-lg lg:w-32 lg:h-10 md:w-32 md:h-10 sm:text-lg sm:w-28 sm:h-10 text-base w-28 h-9 bg-white text-black text-center rounded-lg hover:bg-red-900 hover:text-white hover:shadow-md hover:shadow-white transition duration-1000 ease-in-out hover:scale-80" target="_blank" rel="noreferrer" href={project.githubRepo}>
                  <p className="lg:mt-1 md:mt-2 mt-1">Github repo</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
















// <<import React, { useRef, useEffect } from "react";

// import { motion, useInView, useAnimation } from "framer-motion";



// export default function Divs({ project, index }) {
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: true });
//     const controls = useAnimation();
  
//     useEffect(() => {
//       if (isInView) {
//         controls.start("visible");
//       }
//     }, [isInView, controls]);

// // portfolios :
// // https://diegotellez-portfolio.netlify.app/
// // https://ramalfattahi.github.io/my-portfolio/

//     // handle mouse
//     // const mouseOver = () => {
//     //   // document.querySelector(".project_img").classList.remove("hidden");
//     //   document.querySelector(".first").classList.remove("flex");
//     //   document.querySelector(".first").classList.remove("flex-col");
//     //   document.querySelector(".first").classList.add("hidden");
//     //   document.querySelector(".second").classList.remove("hidden");
//     // };
//     // const mouseLeave = () => {
//     //   // document.querySelector(".project_img").classList.add("hidden");
//     // };


 
//     return (
//       <motion.div
//         variants={{
//           hidden: { opacity: 0, y: 100, scale: 1.2 },
//           visible: { opacity: 1, y: 0, scale: 1 }
//         }}
//         initial="hidden"
//         animate={controls}
//         transition={{ duration: 1, delay: 0, ease: "easeInOut" }}
//         className="flex justify-center"
//       >

//            <div ref={ref} className="flex mt-20 flex-col w-4/5 h-auto bg-gradient-to-r from-red-950 to-transparent rounded-lg">
          
//           <div className="lg:h-96 md:h-72 sm:h-72 flex justify-center items-center gap-8 hover:bg-gradient-to-l hover:from-red-950 hover:to-transparent hover:shadow-lg hover:shadow-white hover:border-white border-red-900 border-2 rounded-lg transition duration-1000 ease-in-out
//           " >

//             <div className="w-full ml-10" >
//               <h1 className="text-center lg:text-5xl md:text-4xl sm:text-3xl text-2xl mt-3 mb-5">{project.namee}</h1>
//               <p className="lg:text-base md:text-base text-sm lg:mt-6 lg:mb-8 md:mt-4 md:mb-6 sm:mt-3 sm-mb-5 mt-3 mb-5">{project.details}</p>
//               <div className="flex lg:gap-10 md:gap-8 sm:gap-7 justify-center mb-5 gap-6">
//                 <a className="md:text-lg lg:w-32 lg:h-10 md:w-32 md:h-10 sm:text-lg sm:w-28 sm:h-10 text-base w-28 h-9 bg-white text-black text-center rounded-lg hover:bg-red-900 hover:text-white hover:shadow-md hover:shadow-white transition duration-1000 ease-in-out hover:scale-80" target="_blank" rel="noreferrer" href={project.viewSite}>
//                   <p className="lg:mt-1 md:mt-2 mt-1">View site</p>
//                 </a>
//                 <a className="md:text-lg lg:w-32 lg:h-10 md:w-32 md:h-10 sm:text-lg sm:w-28 sm:h-10 text-base w-28 h-9 bg-white text-black text-center rounded-lg hover:bg-red-900 hover:text-white hover:shadow-md hover:shadow-white transition duration-1000 ease-in-out hover:scale-80" target="_blank" rel="noreferrer" href={project.githubRepo}>
//                   <p className="lg:mt-1 md:mt-2 mt-1">Github repo</p>
//                 </a>
//               </div>
//             </div>

//             <div className="h-full w-full hidden lg:flex lg:items-center ">
//               <img src={project.img} alt="image" className="project_img w-full h-4/5 border-2 border-black animate-fade-in
//               shadow-2xl shadow-red-900" />
//             </div>

//           </div>
//         </div>
//       </motion.div>
//     );
//   }>>
  