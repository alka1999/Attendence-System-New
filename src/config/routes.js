import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import Pre from "../pages/PreIncomeDeclaration/Pre";
import Slip from "../pages/MyPaySlip/Slip";
import Taxr from "../pages/MyTaxReport/Taxr";
import Myform from "../pages/MyForm16/Myform";
import Changep from "../pages/ChangePassword/Changep";
import Sstatement from "../pages/ViewAnnualSalaryStatement/Sstatement";
import Invest from "../pages/InvestmentDeclaration/Invest";
import Personal from "../pages/PersonalDetails/Personal";
import Myq from "../pages/MyQueries/Myq";
import Myapplication from "../pages/MyLeaveApplication/Myapplication";
import Thisy from "../pages/MyLeaveApplication/Showcases/Thisy";
import Lasty from "../pages/MyLeaveApplication/Showcases/Lasty";
import Priory from "../pages/MyLeaveApplication/Showcases/Priory";
import Active from "../pages/MyQueries/Showcase/Active";
import Closed from "../pages/MyQueries/Showcase/Closed";
import Mycalender from "../pages/MyLeaveCalender/Mycalender";
import Applyl from "../pages/MyLeaveCalender/Showcase/Applyl";
import Leavec from "../pages/MyLeaveCalender/Showcase/Leavec";
import Leaved from "../pages/MyLeaveCalender/Showcase/Leaved";

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
  { path: "/personal-detail", element: <Personal/>},
  { path: "/my-query", element: <Myq/>},
  { path: "/my-query/active", element: <Active/>},
  { path: "/my-query/closed", element: <Closed/>},

  { path: "/my-leave-applications", element: <Myapplication/>},
  { path: "/my-leave-applications/ty", element: <Thisy/>},
  { path: "/my-leave-applications/ly", element: <Lasty/>},
  { path: "/my-leave-applications/py", element: <Priory/>},

  { path: "/my-leave-calender", element: <Mycalender/>},
  { path: "/my-leave-calender/apply-for-leaves", element: <Applyl/>},
  { path: "/my-leave-calender/leave-card", element: <Leavec/>},
  { path: "/my-leave-calender/leave-details", element: <Leaved/>},
];

export default routes;
