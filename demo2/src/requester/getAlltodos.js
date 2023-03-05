const url = 'http://localhost:3030/jsonstore/todos';

function getAllTodos() {
    return (
        fetch(url)
            .then((response) => response.json())
            .then((todo) => todo)
            .catch(err => console.log(err))
    );
} 

export default getAllTodos;