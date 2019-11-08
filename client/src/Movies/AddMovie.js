import React, { useState } from 'react';
import axios from "axios";

function AddMovies(props) {
    const [movie, setMovie] = useState({
        id: Date.now(),
        title: "",
        director: "",
        metascore: 0,
        stars: []
    });

    const [star, setStar] = useState({
        star0: "",
        star1: "",
        star2: "",
        star3: ""
    });

    const changeHandler = (event) => {
        setMovie({
            ...movie,
            [event.target.name]: event.target.value
        })};

    const starHandler = (event) => {
        setStar({
            ...star,
            [event.target.name]: event.target.value
        })};

    const submitHandler = (event) => {
        event.preventDefault();
        movie.stars.push(star.star0);
        movie.stars.push(star.star1);
        movie.stars.push(star.star2);
        movie.stars.push(star.star3);
        axios.post("http://localhost:5000/api/movies", movie)
            .then(res => {
                props.history.push("/")
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <h1>Add Movie</h1>
                <input type="text" name="title" value={movie.title} placeholder="Title" onChange={changeHandler} />
                <input type="text" name="director" value={movie.director} placeholder="Director" onChange={changeHandler} />
                <input type="number" name="metascore" value={movie.metascore} placeholder="Meta Score" onChange={changeHandler} />
                <input type="text" name="star0" value={star.star0} placeholder="Star" onChange={starHandler} />
                <input type="text" name="star1" value={star.star1} placeholder="Star" onChange={starHandler} />
                <input type="text" name="star2" value={star.star2} placeholder="Star" onChange={starHandler} />
                <input type="text" name="star3" value={star.star3} placeholder="Star" onChange={starHandler} />
                <button className="submit-button" type="submit">Update</button>
            </form>
        </div>
    )
}

export default AddMovies;