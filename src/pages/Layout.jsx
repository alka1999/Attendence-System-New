import React from "react";
import Sidenav from "../Component/Sidenav/Sidenav";
import Topnav from "../Component/topnav/Topnav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import routes from "../config/routes";

export default function Layout() {
  return (
    <div>
      <Topnav />
      <Router>
        <div className="p-grid">
          <div className="p-col-3 p-p-3 p-mt-2 optdiv">
            <Sidenav />
          </div>
          <div className="p-col p-mt-2 sidenav">
            <Routes>
              {routes.map((route) => (
                <Route path={route.path} element={route.element} />
              ))}
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}
