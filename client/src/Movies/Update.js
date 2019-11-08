import React, { useState } from 'react';
import axios from 'axios';

function Update(props) {
    const [update, setUpdate] = useState({
        id: props.match.params.id,
        title: '',
        director: '',
        metascore: 0,
        stars: []
    });

    const changeHandler = (event) => {
        setUpdate({
            ...update,
            [event.target.name]: event.target.value
        })};

    const submitHandler = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:5000/api/movies/${update.id}`, update)
            .then(res => {
                props.history.push("")
            })
            .catch(err => {
                console.log(err);
            });
    };
console.log(update);
    return (
        <div>
            <form onSubmit={submitHandler}>
                <h1>Update Movie Information</h1>
                <input type="text" name="title" value={update.title} placeholder="Title" onChange={changeHandler} />
                <input type="text" name="director" value={update.director} placeholder="Director" onChange={changeHandler} />
                <input type="number" name="meta" value={update.metascore} placeholder="Meta Score" onChange={changeHandler} />
                <input type="text" name="stars" value={update.stars[0]} placeholder="Star" onChange={changeHandler} />
                <input type="text" name="stars" value={update.stars[1]} placeholder="Star" onChange={changeHandler} />
                <input type="text" name="stars" value={update.stars[2]} placeholder="Star" onChange={changeHandler} />
                <input type="text" name="stars" value={update.stars[3]} placeholder="Star" onChange={changeHandler} />
                <button type="submit">Update</button>
            </form>

        </div>
    )
}

export default Update;