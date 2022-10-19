import React, { Component, useState } from "react";
import MoviesList from "./component/moviesList";
import "./app.css";

function App () {
  const [moviee, setMoviee] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  async function fetchMovieHandler() {
    setIsLoading(true)
    setError(null)
    try{
      const response = await fetch("https://swapi.dev/api/films/");
      if(!response.ok){
        throw new Error("something went wrong")
      }
      const data = await response.json();
    
      const transformedMoviee = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          subtitle: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMoviee(transformedMoviee)
    } catch(error) {
       setError(error.message)
    }
    setIsLoading(false)
    
  }
  return (
    <div className="container-fluid bg-dark mt-2 text-center">
      <div className="row justify-content-center mb-3">
        <div className="col-md-8 bg-light rounded-3 text-center">
          <button
            className="btn-outline-primary m-3 rounded-2"
            onClick={fetchMovieHandler}
          >
            Fetch Movies
          </button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 bg-light rounded-3">
          {!isLoading && moviee.length > 0 && <MoviesList movies={moviee} />}
          {isLoading &&  <p>Loading...</p>}
          {!isLoading && moviee.length === 0 && !error && <p>Found no movies</p>}
          {error && <p>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default App;
