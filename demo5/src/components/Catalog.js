import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Catalog() {
    const url = 'http://localhost:3030/data/movies';
    const [moveis, setMovies] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(m => setMovies(m))
            .catch(err => setMovies([]))
    }, [url]);

    return (
        <section>
            <h1>Catalog Page</h1>
                <ul>
                    {moveis.map((m) => {
                        return <li key={m._id}>Name: {m.title} <button><Link to={`/details/${m._id}`}>Detalis</Link></button></li>;
                    })}
                </ul>
        </section>
    )
}