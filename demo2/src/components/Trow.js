export default function Trow({ _id, text, isCompleted, changeStatus }) {
    let status = 'Completed!';
    let clas = 'todo is-completed';
    
    if (!isCompleted) {
        status = 'Not completed!';
        clas = 'todo';
    }

    return (
        <tr className={clas}>
            <td>{text}</td>
            <td>{status}</td>
            <td className="todo-action">
                <button className="btn todo-btn" onClick={() => changeStatus(_id)}>Change status</button>
            </td>
        </tr>
    );
}