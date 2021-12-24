import React from 'react'
import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from "react-router-dom";
import { } from "./Mycalender.css";



export default function Mycalender(props) {

   

    

    let navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    const options = [
        {
            label: 'Apply for Leaves',
            icon: 'pi pi-fw pi-pencil',
            command: () => {
                navigateTo("/my-leave-calender/apply-for-leaves");
            },
        },
        {
            label: 'Leave Details',
            icon: 'pi pi-fw pi-book ',
            command: () => {
                navigateTo("/my-leave-calender/leave-details");
            },
        },
        {
            label: 'Leave Card',
            icon: 'pi pi-fw pi-envelope',
            command: () => {
                navigateTo("/my-leave-calender/leave-card");
            },
        },
    ];

    return (
        <div>

            <div className="head">
                <h1>My Leave Calender</h1>
            </div>
            <div className="parent">


                <div className="card">
                    <TabMenu model={options} />
                </div>
                

            </div>
        </div>
    )
}
