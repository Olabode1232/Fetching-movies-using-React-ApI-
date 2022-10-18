import React, { Component } from "react";
import Movies from "./movies";

const MoviesList = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="">
         <ul>
         {props.movies.map((movie) => (
            <Movies
              key={movie.id}
              title={movie.title}
              subtitle={movie.subtitle}
            />
          ))}
         </ul>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
