import { createBrowserRouter, createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import AnimateLayout from "../layouts/AnimateLayout";
import NotFound from "../pages/NotFound";




export const routes=createBrowserRouter([
    {
        path:'/',
        element: <AnimateLayout/>,
        children:[
            {path: '/', element: <Home/>},
            {path: '*', element: <NotFound/>},
        ]

    }
])