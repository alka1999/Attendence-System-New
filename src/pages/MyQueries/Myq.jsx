import React from 'react'
import { Button } from "primereact/button";
import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from "react-router-dom";
import { } from "./Myq.css";

export default function Myq() {

    let navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    const status = [
        {
            label: 'Active',
            command: () => {
                navigateTo("/my-query/active");
            },
        },
        {
            label: 'Closed',
            command: () => {
                navigateTo("/my-query/closed");
            },
        },
    ];


    return (
        <div>
            <div className="head">
                <h1>My Queries</h1>
            </div>

            <div className="parent">
                <div className="card">
                    <TabMenu model={status} />
                </div>
            </div>
        </div>
    )
}
