// import React, {useRef, useEffect} from "react";

// // framer motion
// import {motion, useInView, useAnimation} from "framer-motion";




// // images


// export default function Projects() {
//     const style = {
//         // borderRadius: '34% 64% 77% 26% / 73% 54% 45% 19%',
//         animation: 'projectSpin 5s linear infinite', // Apply animation
//       };

//     const project = [
      
//         {
//             id : 1,
//             namee :"Car rental 🚗",
//             details : "Explore our car rental website built with React and styled using CSS. Discover reliable, hassle-free transportation options with our wide selection of high-quality vehicles, catering to all your travel requirements.",
//             viewSite : "https://carrental-orcin.vercel.app/",
//             githubRepo : "https://github.com/RahmounFares2001"
    
//         },
//         {
//             id : 2,
//             namee : "Keeper app 📝",
//             details : "Developed with ReactJS and styled using CSS, this app offers a responsive design for a seamless experience across devices. It allows you to categorize and organize your notes, be it for personal, work, or creative purposes.",
//             viewSite : "https://keeper-nu-nine.vercel.app/",
//             githubRepo : "https://github.com/RahmounFares2001/keeper"
//         },
//         {
//             id:3,
//             namee: "CV generator",
//             details: "Creating a user-friendly website for effortless CV creation, input personal/professional details, and auto-generate well-structured CVs, streamlining job applications.",
//             viewSite: "c",
//             githubRepo: "https://github.com/RahmounFares2001",
//         }
//     ]


//     // animation
//     const ref = useRef(null);
//     const isInView = useInView(ref, {once:true, });
    
//     const mainControls = useAnimation();
     
//     useEffect(() =>{
//         if(isInView) {
//             mainControls.start("visible")
//         }
//     }, [isInView]);


//     return(
//         <div className="flex flex-col mb-20">
//               {project.map((proj) => (

//                  <motion.div
//                  variants={{
//                      hidden: {opacity: 0, y:100},
//                      visible: {opacity: 1, y:0}
//                  }}
//                  initial= "hidden"
//                  animate= {mainControls}
//                  transition={{duration: 1, delay: 0.25}}
//                  >

//                 <div className="flex justify-center lg:mr-20" >
//                     <div ref={ref} className="flex mt-20 flex-col  w-4/5 h-auto
//                     bg-gradient-to-r from-red-950 to-transparent rounded-lg" >
//                         <div className="lg:h-96 md:h-72 sm:h-72 flex justify-center items-center gap-16 
//                         hover:bg-gradient-to-l hover:from-red-950 hover:to-transparent 
//                         hover:shadow-lg hover:shadow-white hover:border-white
//                         border-red-900 border-2 rounded-lg
//                         transition duration-1000 ease-in-out" >
//                             <div className="w-4/5 ">
                            
//                                         <h1 className="text-center lg:text-5xl md:text-4xl sm:text-3xl text-2xl mt-3 mb-5">{proj.namee}</h1>
//                                 <p className="lg:text-base md:text-base text-sm lg:mt-6 lg:mb-8 md:mt-4 md:mb-6 sm:mt-3 sm-mb-5
//                                 mt-3 mb-5">{proj.details}</p>


//                                 <div className="flex lg:gap-10 md:gap-8 sm:gap-7 justify-center mb-5 gap-6" >
//                                     <a className="md:text-lg lg:w-32 lg:h-10 md:w-32 md:h-10 sm:text-lg sm:w-28 sm:h-10
//                                     text-base w-28 h-9 
//                                     bg-white text-black  text-center rounded-lg
//                                     hover:bg-red-900 hover:text-white hover:shadow-md hover:shadow-white
//                                     transition duration-1000 ease-in-out hover:scale-80"
//                                     target="_blank" rel="noreferrer" href={proj.viewSite}>
//                                         <p className="lg:mt-1 md:mt-2 mt-1">View site</p></a>
//                                     <a className="md:text-lg lg:w-32 lg:h-10 md:w-32 md:h-10 sm:text-lg sm:w-28 sm:h-10
//                                     text-base w-28 h-9 
//                                     bg-white text-black  text-center rounded-lg
//                                     hover:bg-red-900 hover:text-white hover:shadow-md hover:shadow-white
//                                     transition duration-1000 ease-in-out hover:scale-80"
//                                     target="_blank" rel="noreferrer" href={proj.githubRepo} >
//                                         <p className="lg:mt-1 md:mt-2 mt-1">Github repo</p></a>
//                                 </div>
                                
//                             </div>
                        
//                         </div>
                    
//                     </div>
//             </div>

//             </motion.div>

                            
//             ))}
//         </div>
       
//     )
// }