import React, { useState } from 'react';
import axios from 'axios';

function Update(props) {

    const [star, setStar] = useState({
        star0: '',
        star1: '',
        star2: '',
        star3: ''
    });
    const [update, setUpdate] = useState({
        id: props.match.params.id,
        title: '',
        director: '',
        metascore: 0,
        stars: [],
    });

    const changeHandler = (event) => {
        setUpdate({
            ...update,
            [event.target.name]: event.target.value
        })};

    const starHandler = (event) => {
        setStar({
            ...star,
            [event.target.name]: event.target.value
        })};

    const submitHandler = (event) => {
        event.preventDefault();
        update.stars.push(star.star0);
        update.stars.push(star.star1);
        update.stars.push(star.star2);
        update.stars.push(star.star3);
        axios.put(`http://localhost:5000/api/movies/${update.id}`, update)
            .then(res => {
                props.history.push(`/movies/${props.match.params.id}`)
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
                <input type="number" name="metascore" value={update.metascore} placeholder="Meta Score" onChange={changeHandler} />
                <input type="text" name="star0" value={star.star0} placeholder="Star" onChange={starHandler} />
                <input type="text" name="star1" value={star.star1} placeholder="Star" onChange={starHandler} />
                <input type="text" name="star2" value={star.star2} placeholder="Star" onChange={starHandler} />
                <input type="text" name="star3" value={star.star3} placeholder="Star" onChange={starHandler} />
                <button className="submit-button" type="submit">Update</button>
            </form>

        </div>
    )
}

export default Update;