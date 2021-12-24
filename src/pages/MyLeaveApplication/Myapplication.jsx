import React from 'react'
import { Button } from "primereact/button";
import { } from './Myapplication.css';
import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from "react-router-dom";

export default function Myapplication() {
    let navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };
    
    const items = [
        {
            label: 'This year',
            command: () => {
                navigateTo("/my-leave-applications/ty");
            },
        },
        {
            label: 'Last Year',
            command: () => {
                navigateTo("/my-leave-applications/ly");
            },
        },
        {
            label: 'Prior Year',
            command: () => {
                navigateTo("/my-leave-applications/py");
            },
        },
    ];

    return (
        <div>
            <div className="head">
                <h1>My Leave Applications</h1>
            </div>

            <div className="parent">

                <div className="card">
                    <TabMenu model={items}  />
                </div>

            </div>
        </div>
    )
}
