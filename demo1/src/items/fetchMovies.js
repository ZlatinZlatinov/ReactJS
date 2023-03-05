const movieURL = 'http://localhost:3030/data/movies';

const allMovies = () => {
    return (fetch(movieURL)
        .then((m) => m.json())
        .then((m) => console.log(m))
        .catch(e => console.log(e)));
} 

export default allMovies;

