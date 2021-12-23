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
        },
        {
          label: "My Tax Report",
        },
        {
          label: "My Form 16",
        },
        {
          label: "Income Tax Calculator",
        },
        {
          label: "Change Password",
        },
        {
          label: "Annual Salary Statement",
        },
        {
          label: "Investment Declaration",
        },
        {
          label: "Personal Details",
        },
        {
          label: "My Queries",
        },
      ],
    },
    {
      label: "Leave Management",
      items: [
        {
          label: "My Leave Application",
        },
        {
          label: "My Leave Calender",
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
      <PanelMenu model={navigationList} />
    </div>
  );
}
