import React from 'react'
import { Button } from "primereact/button";
import { GiNotebook } from "react-icons/gi";

export default function Personal() {
  return (
    <div>
      <div className="head">
        <h1>Personal Details Change Request</h1>
      </div>
      <div className="show">
        <div className="dwd">
          <Button className="p-button-secondary">
            <GiNotebook />
            New Request
          </Button>
        </div>
        <div className="p-grid ">
          <div className="p-col-3">
            <div className="card">
              <h5>Updated On</h5>

            </div>
          </div>
          <div className="p-col-3">
            <div className="card">
              <h5>Submitted On</h5>

            </div>
          </div>
          <div className="p-col-3">
            <div className="card">
              <h5>Status</h5>

            </div>
          </div>
          <div className="p-col-3">
            <div className="card">
              <h5>View</h5>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
