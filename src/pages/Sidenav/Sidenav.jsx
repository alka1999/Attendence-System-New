import React from 'react'
import { PanelMenu } from 'primereact/panelmenu';
import {  } from "./Sidenav.css";
import Pre from "../PreIncomeDeclaration/Pre";
import Slip from "../MyPaySlip/Slip";
export default function Sidenav() {

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
            {/* code for body */}
            <div className='p-grid'>
                    <div className='p-col-3 p-p-3 p-mt-2 optdiv'>
                        <div className="card">
                            <PanelMenu model={items} style={{ width: '22rem' }} />
                        </div>
                    </div>
                    <div className='p-col p-mt-2 sidenav'>
                        <Slip/>
                    </div>
                </div>
        </div>
    )
}
