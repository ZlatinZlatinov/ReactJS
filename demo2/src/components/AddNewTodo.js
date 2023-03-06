const url = 'http://localhost:3030/jsonstore/todos';

export default function AddNewTodo() {
    function addTodo() {
        const text = prompt('Add new todo:');
        const data = {
            text,
            isCompleted: false,
        }

        fetch(url, {
            method: 'Post',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).catch(err => console.log(err));
    }

    return (
        <div class="add-btn-container">
            <button className="btn" onClick={addTodo}>+ Add new Todo</button>
        </div>
    );
}