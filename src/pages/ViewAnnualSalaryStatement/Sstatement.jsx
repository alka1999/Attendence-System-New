import React, {useState} from 'react'
import {  } from "./Sstatement.css";
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

export default function Sstatement() {

    const [selectedYear, setSelectedYear] = useState(null);



    const year = [
        { name: '2020-2021', code: 'NY' },
        { name: '2019-2020', code: 'RM' },
        { name: '2018-2019', code: 'LDN' },
        { name: '2017-2018', code: 'IST' },
        { name: '2016-2017', code: 'PRS' }
    ];
    const onYearChange = (e) => {
        setSelectedYear(e.value);
    }

    return (
        <div>
            <div className='head'>
                <h1>My Annual Salary Statement</h1>
            </div>
            <div className='p-grid parent'>
                <div className='p-col mycol'>
                    <h2>Select Year</h2>
                </div>
                <div className='p-col'>
                <h1>
                <Dropdown value={selectedYear} options={year} onChange={onYearChange} optionLabel="name" placeholder="Select Year......."  editable/>
                </h1>
                </div>
                <div className='p-col'>
                    <Button label="Display" className="p-button-raised p-button-text p-button-plain mybtn" />
                </div>
            </div> 
        </div>
    )
}
