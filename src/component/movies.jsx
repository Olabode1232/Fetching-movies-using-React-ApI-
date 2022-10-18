import React, { Component } from "react";

const Movies = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 m-4">
          <li className="list-unstyled bg-dark p-4 text-center rounded-3">
          <h1 className="text-warning">{props.title}</h1>
          <h5 className="text-light">{props.subtitle}</h5>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Movies;
