import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import Topnav from "./Component/Topnav";
import Sidenav from "./pages/Sidenav/Sidenav";
import Layout from "./Layout";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/layout" element={<Layout />} />

          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
