import React, { useState } from "react";
import {} from "../PreIncomeDeclaration/Pre.css";
import { AiFillSave } from "react-icons/ai";
import { Button } from "primereact/button";
import { ListBox } from "primereact/listbox";

export default function Pre() {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "date", code: "NY" },
    { name: "date", code: "RM" },
    { name: "date", code: "LDN" },
    { name: "date", code: "IST" },
    { name: "date", code: "PRS" },
  ];

  return (
    <div>
      <div className="head">
        <h1>Previous Income Declaration</h1>
      </div>
      <div className="show">
        <div className="dwd">
          <Button className="p-button-secondary">
            <AiFillSave fontSize="30"></AiFillSave>
            Previous Income Declaration
          </Button>
        </div>
        <div className="p-grid ">
          <div className="p-col-3">
            <div className="card">
              <h5>Updated On</h5>
              <ListBox
                className="list"
                value={selectedCity}
                options={cities}
                onChange={(e) => setSelectedCity(e.value)}
                optionLabel="name"
                style={{ width: "80%", margin: "auto" }}
              />
            </div>
          </div>
          <div className="p-col-3">
            <div className="card">
              <h5>Submitted On</h5>
              <ListBox
                className="list"
                value={selectedCity}
                options={cities}
                onChange={(e) => setSelectedCity(e.value)}
                optionLabel="name"
                style={{ width: "80%", margin: "auto" }}
              />
            </div>
          </div>
          <div className="p-col-3">
            <div className="card">
              <h5>Status</h5>
              <ListBox
                className="list"
                value={selectedCity}
                options={cities}
                onChange={(e) => setSelectedCity(e.value)}
                optionLabel="name"
                style={{ width: "80%", margin: "auto" }}
              />
            </div>
          </div>
          <div className="p-col-3">
            <div className="card">
              <h5>View</h5>
              <ListBox
                className="list"
                value={selectedCity}
                options={cities}
                onChange={(e) => setSelectedCity(e.value)}
                optionLabel="name"
                style={{ width: "80%", margin: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
