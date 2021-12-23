import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import Pre from "../pages/PreIncomeDeclaration/Pre";
import Slip from "../pages/MyPaySlip/Slip";
import Taxr from "../pages/MyTaxReport/Taxr";
import Myform from "../pages/MyForm16/Myform";
import Changep from "../pages/ChangePassword/Changep";
import Sstatement from "../pages/ViewAnnualSalaryStatement/Sstatement";
import Invest from "../pages/InvestmentDeclaration/Invest";

const routes = [
  { path: "/login", element: <Login /> },
  { path: "/", element: <Landing /> },
  { path: "/privious-income-declaration", element: <Pre /> },
  { path: "/my-pay-slip", element: <Slip/>},
  { path: "/my-tax-report", element: <Taxr/>},
  { path: "/my-form16", element: <Myform/>},

  { path: "/change-password", element: <Changep/>},
  { path: "/annual-salary-statement", element: <Sstatement/>},
  { path: "/investment-declaration", element: <Invest/>},



];

export default routes;
