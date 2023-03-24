import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Movie() {
    const { movieId } = useParams();
    const url = `http://localhost:3030/data/movies/${movieId}`;
    const [movie, setMovie] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(m => setMovie(m));
    }, [url]);

    function backHome(){
        navigate('/catalog');
    }

    return (
        <section>
            <h1>Movie Details</h1>
            <h2>Name: {movie.title}</h2>
            <p><strong>Description: </strong>{movie.description}</p>
            <button onClick={backHome}>Back</button>
            <br/> 
            Image:
            <br/> 
             
            <img src={movie.img} alt={movie.title}/>
        </section>
    );
}