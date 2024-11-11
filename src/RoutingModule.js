import { Outlet, RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import ParentComponent from "./components/Parent";
import Signup from "./components/Signup";
import DashboardContainer from "./components/DashboardContainer";
import NotesContainer from "./components/NotesContainer";
import ArchiveContainer from "./components/ArchiveContainer";
import TrashContainer from "./components/TrashContainer";

function RoutingModule () {

    const routes = createBrowserRouter([
        {
            path: '',
            element: <ParentComponent/>
        },
        {
            path: "signup",
            element: <Signup/>
        },
        {
            path: "/",
            element: <DashboardContainer/>,
            children: [
                {
                    path: "/notes",
                    element: <NotesContainer/>
                },
                {
                    path: "/archive",
                    element: <ArchiveContainer/>
                },
                {
                    path: "/trash",
                    element: <TrashContainer/>
                }
            ]
        }
    ])

    return (
       <RouterProvider router={routes}/>
    )
}

export default RoutingModule
