import React, { Component } from "react";
import "./button.css"

const Button = (props) => {
  <div className="container">
      <div className="row">
          <div className="btnHolder bg-success h-100 m-5">
              {props.children}
          </div>
      </div>
  </div>;
};

export default Button;
