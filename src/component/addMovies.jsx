import React, { Component,useRef,useState  } from "react";

const AddMovies = (props) => {
    const titleRef = useRef("");
    const subtitleRef = useRef("");
    const releaseDateRef = useRef("")

    const submitHandler = (event) => {
        event.preventDefault()
        const movie = {
            title: titleRef.current.value,
            subtitle: subtitleRef.current.value,
            releaseDate: releaseDateRef.current.value
        }
        props.onAddMovie(movie)
       
    }
    

  return (
    <form className="" onSubmit={submitHandler}>
      <label htmlFor="title" className="form-label fw-4 fs-5">
        Title
      </label>
      <input type="text" id="title" ref={titleRef} className="form-control rounded-5 mb-2" />
      <label htmlFor="opening text" className="form-label fw-4 fs-5">
        Opening Text
      </label>
      <textarea id="opening text" ref={subtitleRef} className="form-control rounded-2 mb-2" />
      <label htmlFor="release date" className="form-label fw-4 fs-5">
        Release Date
      </label>
      
      <input type="date" id="release date" ref={releaseDateRef} className="form-control rounded-5" />
      <div className="text-center">
      <button className="my-3 rounded-3 btn btn-outline-dark">Add Movie</button>
      </div>
    </form>
  );
};
export default AddMovies;
