import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import Pre from "../pages/PreIncomeDeclaration/Pre";

const routes = [
  { path: "/login", element: <Login /> },
  { path: "/", element: <Landing /> },
  { path: "/privious-income-declaration", element: <Pre /> },
];

export default routes;
