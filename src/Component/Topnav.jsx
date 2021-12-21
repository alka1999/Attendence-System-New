import React, { useState } from 'react'
import { TabMenu } from 'primereact/tabmenu';
import { Avatar } from 'primereact/avatar';
import { } from "../Component/Topnav.css";
import { Button } from 'primereact/button';
import { ListBox } from 'primereact/listbox';
import { PanelMenu } from 'primereact/panelmenu';


export default function Topnav() {

    const items = [
        {
            label: 'Main Menu',
            items: [
                {
                    label: 'Privious Income Declaration',
                },
                {
                    label: 'My Pay Slip',
                },
                {
                    label: 'My Tax Report',
                },
                {
                    label: 'My Form 16',
                },
                {
                    label: 'Income Tax Calculator',
                },
                {
                    label: 'Change Password',
                },
                {
                    label: 'Annual Salary Statement',
                },
                {
                    label: 'Investment Declaration',
                },
                {
                    label: 'Personal Details',
                },
                {
                    label: 'My Queries',
                },

            ]
        },
        {
            label: 'Leave Management',
            items: [
                {
                    label: 'My Leave Application'
                },
                {
                    label: 'My Leave Calender'
                }
            ]
        },
        {
            label: 'Attendence',
            items: [
                {
                    label: 'Punch OUT'
                },
                {
                    label: 'Punch Card'
                },
                {
                    label: 'My Daily Attendence'
                },
                {
                    label: 'My OD Application'
                },
                {
                    label: 'My Punch Application'
                }
            ]
        }
    ];

    return (
        <div>
            <div className='Main-container'>            {/* code for Nabar */}
                <div className='nav'>
                    <div className='p-grid'>
                        <div className='p-col-5'>
                            <div className='p-grid'>
                                <div className='p-col-1'></div>
                                <div className='p-col-3 p-mx-10'>
                                    <h1 className='p-mt-0'>HEXADIGI</h1>
                                </div>
                                <div className='p-col'>
                                    <p>Software Private Limited</p>
                                </div>
                            </div>
                        </div>
                        <div className='p-col-3'></div>
                        <div className='p-col end'>
                            <div className='p-grid' >
                                <div className='p-col'>
                                    <div className="card">
                                        <Avatar className="p-mr-5  avt" size="large" shape="circle">
                                            <icon className='pi pi-fw pi-bell'></icon>
                                        </Avatar>

                                        <Avatar className="p-mr-5 avt" size="large" shape="circle">
                                            <icon className='pi pi-fw pi-comments'></icon>
                                        </Avatar>
                                        <Avatar className="p-mr-5 avt" size="large" shape="circle">
                                            <icon className='pi pi-fw pi-info-circle'></icon>
                                        </Avatar>
                                    </div>
                                </div>
                                <div className='p-col'>
                                    <div className='p-grid'>
                                        <div className='p-col'>
                                            <span className='p-d-block'>Alka Godbole</span>
                                            <span className='p-d-block'>UID1234</span>
                                        </div>
                                        <div className='p-col'>
                                            <Avatar image="https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg" className="p-mr-2" size="large" shape="circle" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* code for body */}
                <div className='p-grid'>
                    <div className='p-col-3 p-p-3 p-mt-2 optdiv'>
                        <div className="card">
                            <PanelMenu model={items} style={{ width: '22rem' }} />
                        </div>
                    </div>
                    <div className='p-col p-mt-2 sidediv'>
                        
                    </div>
                </div>
            </div>


        </div>
    )
}
