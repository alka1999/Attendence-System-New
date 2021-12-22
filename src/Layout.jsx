import React from 'react'
import Sidenav from "./pages/Sidenav/Sidenav";
import Topnav from "./Component/Topnav";
import Login from "./pages/Login/Login";
export default function Layout() {
    return (
        <div>
            <Topnav/>
            <Sidenav/>
        </div>
    )
}
