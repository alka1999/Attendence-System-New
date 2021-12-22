import React, {useEffect, useState, useRef} from 'react'
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import {  } from "../MyPaySlip/Slip.css";
export default function Slip() {
   
    const [selectedTime, setSelectedTime] = useState(null);



    const tperiod = [
        { name: '2020-2021', code: 'NY' },
        { name: '2019-2020', code: 'RM' },
        { name: '2018-2019', code: 'LDN' },
        { name: '2017-2018', code: 'IST' },
        { name: '2016-2017', code: 'PRS' }
    ];


    return (
        <div>
            <div className='head'>
                <h1>My Pay Slip</h1>
            </div>
            <div className='p-grid parent'>
                <div className='p-col mycol'>
                    <h2>Select Time Period</h2>
                </div>
                <div className='p-col'>
                    <h1>
                    <Dropdown value={selectedTime} options={tperiod} optionLabel="name" editable />
                    </h1>
                </div>
                <div className='p-col'>
                    <Button label="GO" className="p-button-raised p-button-text p-button-plain mybtn" />
                </div>
            </div>
        </div>
    )
}
