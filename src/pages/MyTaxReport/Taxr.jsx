import React, {useEffect, useState, useRef} from 'react'
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import {  } from "../MyTaxReport/Taxr.css";
export default function Taxr() {

    const [selectedTtime, setSelectedTtime] = useState(null);



    const tperiod = [
        { name: '2020-2021', code: 'NY' },
        { name: '2019-2020', code: 'RM' },
        { name: '2018-2019', code: 'LDN' },
        { name: '2017-2018', code: 'IST' },
        { name: '2016-2017', code: 'PRS' }
    ];
    const onTperiodChange = (e) => {
        setSelectedTtime(e.value);
    }

    return (
        <div>
            <div className='head'>
                <h1>My Tax Report</h1>
            </div>
            <div className='p-grid parent'>
                <div className='p-col mycol'>
                    <h2>Income Tax Period</h2>
                </div>
                <div className='p-col'>
                    <h1>
                    <Dropdown value={selectedTtime} options={tperiod} onChange={onTperiodChange} optionLabel="name" placeholder="Select Time Period"  editable />
                    </h1>
                </div>
                <div className='p-col'>
                    <Button label="Display" className="p-button-raised p-button-text p-button-plain mybtn" />
                </div>
            </div> 
        </div>
    )
}
