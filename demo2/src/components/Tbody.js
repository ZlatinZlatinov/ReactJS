import { useEffect, useState } from 'react';
//import getAllTodos from "../requester/getAlltodos"
import Trow from "./Trow";

const url = 'http://localhost:3030/jsonstore/todos';

//OFC adding new todo or changing its status should make a req to the server

export default function Tbody() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((todo) => setTodos(Object.values(todo).slice(-10)))
            .catch(err => console.log(err))
    }, []);

    function changeStatus(_id) {
        setTodos((arr) => {

            return arr.map((a) => {
                
                if (a._id === _id) {
                    if (a.isCompleted) {
                        a.isCompleted = false;
                        return a;
                    }

                    a.isCompleted = true;
                }

                return a;
            });
        });
    }

    return (
        <tbody>
            {todos.map((t) => {
                return <Trow key={t._id} changeStatus={changeStatus} {...(t)} />
            })}
        </tbody>
    );
}