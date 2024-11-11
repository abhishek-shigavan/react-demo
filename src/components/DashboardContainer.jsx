import { Outlet } from "react-router-dom"
import Drawer from '@mui/material/Drawer';
import { useState } from "react";

function DashboardContainer () {
    const [drawerState, setDrawerState] = useState(false)
    return (
        <>
            <h1>DashboardContainer</h1>
            <h2 onClick={() => setDrawerState(!drawerState)}>Header</h2>
            <Drawer open={drawerState} onClose={() => setDrawerState(false)}>
       <span>Notes</span><br />
       <span>archive</span>
      </Drawer>
            <Outlet/>

        </>
    )
}

export default DashboardContainer
