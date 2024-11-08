import { Outlet, RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import ParentComponent from "./components/Parent";
import Signup from "./components/Signup";

function RoutingModule () {

    const routes = createBrowserRouter([
        {
            path: '',
            element: <ParentComponent/>
        },
        {
            path: "signup",
            element: <Signup/>
        }
    ])

    return (
       <RouterProvider router={routes}/>
    )
}

export default RoutingModule
