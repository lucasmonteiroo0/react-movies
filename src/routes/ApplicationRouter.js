import { RouterProvider } from "react-router-dom";
import { router } from ".";


export function ApplicationRouter(){
    return <RouterProvider router={router}/>
}