import styles from '../items/movie.module.css';
// so this is how import works
export default function Movie({params, deleteMovie, editMovie}) {
    //console.log(typeof functions);
    return (
        <article className={styles['movie-article']}>
             <h3>Title: {params.name}</h3>
            <img src={params.img} alt={params.name} />
            <br/>
            <span><strong>Director:</strong> {params.director}</span>
            <br/> 
            <button onClick={() => editMovie(params)}>Edit</button> 
            <button onClick={() => deleteMovie(params.id)}>Delete</button>
        </article>
    )
}