import React from 'react'
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { } from "../Component/Login.css";
export default function Login() {
    return (
        <div>
            <form className='login-form'>
                <div className='company-name p-p-0 p-p-sm-1 p-p-md-2 p-p-lg-1'>

                    <h2>HEXADIGI SOFTWARE PRIVATE LIMITED</h2>

                </div>
                <div className='inputs'>
                    <div className="p-fluid">
                        <div className="p-field">

                            <InputText className='input' id="firstname1" type="text" placeholder='Enter Username' />
                        </div>
                        <div className="p-field">

                            <InputText className='input' id="lastname1" type="text" placeholder='Enter Password' />
                        </div>
                    </div>
                    <div className='p-grid'>

                        <div className='p-col checkboxcol'>

                            <div className="p-field-checkbox">
                                <InputText className='input' inputId="city1" type='checkbox' name="city" value="Chicago"/>
                                <label htmlFor="city1">Remember me</label>
                            </div>

                        </div>
                        <div className='p-col'>
                            <Button label="Login" className="p-button-success btnl" />
                        </div>
                    </div>
                    <div className='forpass'>
                        <a href="">Forget password</a>
                    </div>
                </div>
            </form>
        </div>
    )
}
