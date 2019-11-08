import React from 'react';
import axios from 'axios';

const MovieCard = props => {
  const { title, director, metascore, stars, id } = props.movie;

    const clickHandler = (event, id) => {
        event.preventDefault();
            axios.delete(`http://localhost:5000/api/movies/${id}`)
                .then(result => {
                    props.history.push("/movies")
                })
                .catch(error => {
                    console.log(error);
                })
        };

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}

      <div className="delete-button" onClick={(event) => clickHandler(event, id)} >Delete</div>

    </div>
  );
};

export default MovieCard;
