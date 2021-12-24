import React, {useState} from 'react'
import { } from "./Invest.css";
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";
import { RadioButton } from 'primereact/radiobutton';


export default function Invest() {

    const [city, setCity] = useState(null);

    return (
        <div>

            <div className="parent">
                <div>
                    <h1>Welcome to Income Tax Declaration</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iste maiores dolor cupiditate sint aliquid, fuga recusandae. Deserunt excepturi architecto quam, consectetur maxime quis laboriosam. Doloribus praesentium accusamus consequatur eaque facilis, nihil distinctio quos vitae quis eius laboriosam assumenda ut iste ducimus totam officiis sunt in. Quos eaque totam porro expedita. Molestiae eveniet dolore eum laboriosam nobis, laborum consectetur inventore, iure impedit voluptatem dolorem! Earum illo cum adipisci odit in quam quisquam laudantium atque rem totam nisi, eius iure ut! Beatae distinctio laboriosam perspiciatis molestias expedita, dignissimos nostrum ducimus, ad natus cum repellendus sunt. Explicabo doloribus nemo corporis perspiciatis placeat!</p>

                    <div className="p-grid ">
                        <div className="p-col redirect">
                            <a href="https://www.etmoney.com/blog/new-tax-regime-or-old-what-should-you-pick/" target='blank' className="p-mb-2">
                                New and Old Tax Rate
                            </a>
                        </div>
                        <div className="p-col redirect">
                            <a href="https://www.incometaxindia.gov.in/pages/faqs.aspx"> Frequently Asked Questions</a>
                        </div>
                    </div>
                    <h2>Choose between current Tax regime and New Tax Regime</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione corrupti voluptas iste? Repellendus cum vitae, deserunt possimus sint dignissimos in ipsa vel odio sit sunt?</p>

                    <div className='poptype'>
                        <h3>You can set your preference below or use Tax Calculator to know Tax liability</h3>
                        <div className="redirect-btn">
                            <Button label="Go to Tax Calculator" className="p-button-raised p-button-text" />

                        </div>
                        <div className="p-field-radiobutton">
                            <RadioButton inputId="city1" name="city" value="Chicago" onChange={(e) => setCity(e.value)} checked={city === 'Chicago'} />
                            <label htmlFor="city1">Please Choose Your Tax Regime Preference</label>
                        </div>
                        <div className="p-field-radiobutton">
                            <RadioButton inputId="city2" name="city" value="Los Angeles" onChange={(e) => setCity(e.value)} checked={city === 'Los Angeles'} />
                            <label htmlFor="city2">Option for New Tax Regime. I am Ready to go for Many Specified Deductions. </label>
                        </div>
                        
                        <Button label="Submit" className="p-button-raised p-button-success" />
                       
                    </div>
                </div>
            </div>

        </div>
    )
}
