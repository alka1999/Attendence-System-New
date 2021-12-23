import React from "react";
import { Avatar } from "primereact/avatar";
import "./Topnav.css";

export default function Topnav() {
  return (
    <div>
      <div className="Main-container">
        <div className="nav">
          <div className="p-grid">
            <div className="p-col-5">
              <div className="p-grid">
                <div className="p-col-1"></div>
                <div className="p-col-3 p-mx-10">
                  <h1 className="p-mt-0">HEXADIGI</h1>
                </div>
                <div className="p-col">
                  <p>Software Private Limited</p>
                </div>
              </div>
            </div>
            <div className="p-col-3"></div>
            <div className="p-col end">
              <div className="p-grid">
                <div className="p-col">
                  <div className="card">
                    <Avatar className="p-mr-5  avt" size="large" shape="circle">
                      <icon className="pi pi-fw pi-bell"></icon>
                    </Avatar>

                    <Avatar className="p-mr-5 avt" size="large" shape="circle">
                      <icon className="pi pi-fw pi-comments"></icon>
                    </Avatar>
                    <Avatar className="p-mr-5 avt" size="large" shape="circle">
                      <icon className="pi pi-fw pi-info-circle"></icon>
                    </Avatar>
                  </div>
                </div>
                <div className="p-col">
                  <div className="p-grid">
                    <div className="p-col">
                      <span className="p-d-block">Alka Godbole</span>
                      <span className="p-d-block">UID1234</span>
                    </div>
                    <div className="p-col">
                      <Avatar
                        image="https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg"
                        className="p-mr-2"
                        size="large"
                        shape="circle"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
