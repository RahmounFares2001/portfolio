import React from "react"; 

import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from "react-router-dom";

// layout
import HeaderLayout from "./layout/HeaderLayout";

//pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Skills from "./pages/Skills";
import ContactMe from "./pages/ContactMe";
import Footer from "./pages/Footer";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<HeaderLayout />} >
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contactMe" element={<ContactMe />} />

        </Route>
    )
);


export default function App() {
    return(
        <div>
            <RouterProvider router={router} />
        </div>
    )
};
