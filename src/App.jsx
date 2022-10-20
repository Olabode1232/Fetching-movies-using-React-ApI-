import React, { Component,Fragment, useState, useEffect, useCallback } from "react";
import MoviesList from "./component/moviesList";
import "./app.css";
import AddMovies from "./component/addMovies";

function App() {
  const [moviee, setMoviee] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-https-f027e-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          subtitle: data[key].subtitle,
          releaseDate: data[key].releaseDate,
        });
      }

     
      setMoviee(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://react-https-f027e-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        header: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
  }

  return (
    <React.Fragment>
    <div className="container-fluid bg-dark mt-2 ">
      <div className="row justify-content-center mb-3">
        <div className="col-md-8 bg-light rounded-3">
          <AddMovies onAddMovie={addMovieHandler} />
        </div>
      </div>
      <div className="row justify-content-center mb-3 text-center">
        <div className="col-md-8 bg-light rounded-3 text-center">
          <button
            className=" btn btn-outline-dark m-3 rounded-2"
            onClick={fetchMovieHandler}
          >
            Fetch Movies
          </button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 bg-light rounded-3">
          {!isLoading && moviee.length > 0 && <MoviesList movies={moviee} />}
          {isLoading && <p>Loading...</p>}
          {!isLoading && moviee.length === 0 && !error && (
            <p>Found no movies</p>
          )}
          {error && <p>{error}</p>}
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
