import React from 'react'

export default function Closed() {
    return (
        <div>
            <div className="parent">
                <div className="showopt">
                    <div className="p-grid ">
                        <div className="p-col">
                            <div className="card ">
                                <h5>Sr. No.</h5>
                                <hr />
                            </div>
                        </div>
                        <div className="p-col">
                            <div className="card ">
                                <h5>Subject</h5>
                                <hr />
                            </div>
                        </div>
                        <div className="p-col ">
                            <div className="card ">
                                <h5>Toatl Replies</h5>
                                <hr />
                            </div>
                        </div>
                        <div className="p-col ">
                            <div className="card">
                                <h5>Last Updated On</h5>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <p>there are no records to display</p>
                </div>
            </div>
        </div>
    )
}
