import React from "react";
import { PanelMenu } from "primereact/panelmenu";
import "./Sidenav.css";
import { useNavigate } from "react-router-dom";

export default function Sidenav() {
  let navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const navigationList = [
    {
      label: "Main Menu",
      items: [
        {
          label: "Privious Income Declaration",
          command: () => {
            navigateTo("/privious-income-declaration");
          },
        },
        {
          label: "My Pay Slip",
          command: () => {
            navigateTo("/my-pay-slip");
          },
        },
        {
          label: "My Tax Report",
          command: () => {
            navigateTo("/my-tax-report");
          },
        },
        {
          label: "My Form 16",
          command: () => {
            navigateTo("/my-form16");
          },
        },
        {
          label: "Income Tax Calculator",
        },
        {
          label: "Change Password",
          command: () => {
            navigateTo("/change-password");
          },
        },
        {
          label: "Annual Salary Statement",
          command: () => {
            navigateTo("/annual-salary-statement");
          },
        },
        {
          label: "Investment Declaration",
          command: () => {
            navigateTo("/investment-declaration");
          },
        },
        {
          label: "Personal Details",
          command: () => {
            navigateTo("/personal-detail");
          },
        },
        {
          label: "My Queries",
          command: () => {
            navigateTo("/my-query");
          },
        },
      ],
    },
    {
      label: "Leave Management",
      items: [
        {
          label: "My Leave Application",
          command: () => {
            navigateTo("/my-leave-applications");
          },
        },
        {
          label: "My Leave Calender",
          command: () => {
            navigateTo("/my-leave-calender");
          },
        },
      ],
    },
    {
      label: "Attendence",
      items: [
        {
          label: "Punch OUT",
        },
        {
          label: "Punch Card",
        },
        {
          label: "My Daily Attendence",
        },
        {
          label: "My OD Application",
        },
        {
          label: "My Punch Application",
        },
      ],
    },
  ];

  return (
    <div>
      <PanelMenu model={navigationList}/>
    </div>
  );
}
