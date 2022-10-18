import React, { Component } from "react";
import MoviesList from "./component/moviesList";
import "./app.css";

const App = () => {
  const dummy_Movies = [
    {
      id: 1,
      title: "Some Dummy Movie",
      subtitle: "This is the opening text of the movie",
      releaseDate: "2022,05,12"
    },
    {
      id: 2,
      title: "Some Dummy Movie 2",
      subtitle: "This is the second opening text of the movie",
      releaseDate: "2022,08,22"
    },
  ];
  return (
    <div className="container-fluid bg-dark mt-2">
      <div className="row justify-content-center mb-3">
        <div className="col-md-8 bg-light rounded-3 text-center">
        <button className="btn-outline-primary m-3 rounded-2">Fetch Movies</button>

        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 bg-light rounded-3">
          <MoviesList movies={dummy_Movies} />
        </div>
      </div>
    </div>
  );
};

export default App;
