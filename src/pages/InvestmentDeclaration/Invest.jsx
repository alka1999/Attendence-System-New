import React from 'react'
import { } from "./Invest.css";
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";
export default function Invest() {
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

                    <div>
                        <h3>You can set your preference below or use Tax Calculator to know Tax liability</h3>
                        <div className="redirect-btn">
                            <Button label="Go to Tax Calculator" className="p-button-raised p-button-text" />

                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}
