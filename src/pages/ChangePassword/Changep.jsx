import React, { useState } from 'react'
import { Password } from 'primereact/password';
import { } from "./Changep.css";
import { Button } from 'primereact/button';

export default function Changep() {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    return (
        <div>
            <div className="parent">
                <div className=" pass-container">
                    <div className="pass">
                    <h1>Change Password</h1>
                    </div>

                    <div className="pass" >
                    <Password id="password" name="password" toggleMask value={value1} onChange={(e) => setValue1(e.target.value)} placeholder='Enter Old Password' feedback={false}/>
                    </div>
                    <div className="pass" >
                    <Password id="password" name="password" toggleMask value={value2} onChange={(e) => setValue2(e.target.value)} placeholder='Enter New Password' />
                    </div>
                    <div className="pass">
                    <Password id="password" name="password" toggleMask value={value3} onChange={(e) => setValue3(e.target.value)} placeholder='Confirm Password'feedback={false} />
                    </div>

                    <div className="pass">
                    <Button  label="Save Password" className="p-button-raised p-button-success my-btn" />
                    </div>

                </div>
            </div>
        </div>
    )
}
