import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function MoviesList({movies}) {
    const renderMovies =Object.keys(movies).map((movieID) =>(
        <li key={movieID}>
            <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
        </li>
    ))
  return (
    <ul>{renderMovies}</ul> 
  )
}

export default MoviesList