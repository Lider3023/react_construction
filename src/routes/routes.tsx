import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AnimateLayout from "../layouts/AnimateLayout";




export const routes=createBrowserRouter([
    {
        path:'/',
        element: <AnimateLayout/>,
        children:[
            {path: '/', element: <Home/>},
        ]

    }
])