import { createBrowserRouter, createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import AnimateLayout from "../layouts/AnimateLayout";




export const routes=createHashRouter([
    {
        path:'/',
        element: <AnimateLayout/>,
        children:[
            {path: '/', element: <Home/>},
        ]

    }
])