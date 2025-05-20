import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Skills from "../components/Skills";
import ProjectDetails from "../pages/Projects/ProjectDetails";
import Projects from "../components/Projects";

  const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/aboutMe",
                element: <Home></Home>
            },
            {
                path: "/education",
                element: <Education></Education>
            },
            {
                path: "/skills",
                element: <Skills></Skills>
            },
            {
                path: "/projects",
                element: <Projects></Projects>
            },
            {
                path: "/projects/:id",
                element: <ProjectDetails></ProjectDetails>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: "*",
        element: <h1>error</h1>
    }
  ]);

  export default router;