import React, {useState} from 'react'
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import {  } from "./Myform.css";
export default function Myform() {
    const [selectedTperiod, setSelectedTperiod] = useState(null);



    const tperiod = [
        { name: '2020-2021', code: 'NY' },
        { name: '2019-2020', code: 'RM' },
        { name: '2018-2019', code: 'LDN' },
        { name: '2017-2018', code: 'IST' },
        { name: '2016-2017', code: 'PRS' }
    ];
    const onTperiodChange = (e) => {
        setSelectedTperiod(e.value);
    }

    return (
        <div>
            <div className='head'>
                <h1>My Form 16</h1>
            </div>
            <div className='p-grid parent'>
                <div className='p-col mycol'>
                    <h2>Time Period</h2>
                </div>
                <div className='p-col'>
                    <h1>
                    <Dropdown value={selectedTperiod} options={tperiod} onChange={onTperiodChange} optionLabel="name" editable placeholder='Select Time Period' />
                    </h1>
                </div>
                <div className='p-col'>
                    <Button label="Display" className="p-button-raised p-button-text p-button-plain mybtn" />
                </div>
            </div> 
        </div>
    )
}
