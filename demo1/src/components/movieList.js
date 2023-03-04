import { useState } from 'react';
import movies from '../items/movies';
import Movie from './Movie';

export default function MovieList() {
    const [stateMovies, changeMovies] = useState(movies);

    function deleteMovie(id) {
        changeMovies(allMovies => allMovies.filter((m) => m.id !== id));
    }

    function editMovie(params) {
        const name = prompt('Edit movie title:', params.name);
        const index = stateMovies.findIndex(m => m.id === params.id);
        const id = stateMovies[index].id;
        
        changeMovies(allMovies => allMovies.map((m) => {
            if (m.id === id) {
                m.name = name;
            }

            return m;
        }))
    }

    return (
        stateMovies.map((m) => {
            return <li key={m.id}><Movie params={m} deleteMovie={deleteMovie} editMovie={editMovie} /></li>
        })
    )
}