import React from "react";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import "../Landing/Landing.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <div className="mydiv text-center">
        <p>
          welcome to the <strong>HEXADIGI SOFTWARE PRIVATE LIMITED</strong>
          portal by....
        </p>
      </div>
      <div className="p-grid">
        <div className="p-col-8">
          <img
            src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Frebeccaskilbeck%2Ffiles%2F2019%2F02%2FMaintianing-Motivation-in-employees-Blog-Graphic-1200x861.jpg"
            alt="img"
            height="650px"
            width="1000px"
          />
        </div>
        <div className="p-col-4">
          <div className="login">
            <div className="profilediv p-p-0 p-p-sm-1 p-p-md-2 p-p-lg-1">
              <Avatar
                image="https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg"
                className="p-mr-2"
                size="large"
                shape="circle"
              />
            </div>
            <div className="demo-container p-p-0 p-p-sm-1 p-p-md-2 p-p-lg-3">
              <p>
                <b className="company">HEXADIGI</b> Employess self service
              </p>
              <Avatar
                label="A"
                className="p-mr-2"
                size="xlarge"
                shape="circle"
              />

              <Link to="/login">
                <Button className="p-button-rounded p-button-success loginbtn">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
