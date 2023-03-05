import { useEffect, useState } from 'react';
//import getAllTodos from "../requester/getAlltodos"
import Trow from "./Trow";

const url = 'http://localhost:3030/jsonstore/todos';


export default function Tbody() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((todo) => setTodos(Object.entries(todo).slice(0, 10)))
            .catch(err => console.log(err))
    }, []);

    function changeStatus(_id) {
        setTodos((arr) => {
            arr.map(a => {
                if (a[0] === _id) {
                    if (a[1].isCompleted) {
                        a[1].isCompleted = false;
                        return a;
                    }

                    a[1].isCompleted = true;
                }

                return a;
            })
        })
    }

    return (
        <tbody>
            {todos.map((t) => {
                return <Trow key={t[0]} changeStatus={changeStatus} {...(t[1])} />
            })}
        </tbody>
    )
}