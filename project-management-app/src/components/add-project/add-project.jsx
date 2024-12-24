import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function getId(length = 6) {
    return Math.random().toString(36).substring(2, length + 2);
}


export default function AddProject({ data, updateProjects }) {
    const navigate = useNavigate();
    const [inputValues, setInputValues] = useState({
        id: getId(),
        title: '',
        description: '',
        date: ''
    });

    function inputHandler(e) {
        const name = e.target.name;
        const value = e.target.value;

        setInputValues(state => ({
            ...state,
            [name]: value
        }));
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        updateProjects(inputValues);
        navigate('/');
    }

    return (<section className="flex flex-col items-center p-10 gap-12 w-3/4 mt-5">
        <h2 className="text-3xl font-semibold text-gray-700">Add new project</h2>

        <form className="w-full flex flex-col gap-5 mt-5" onSubmit={handleFormSubmit}>
            <div className="self-end flex gap-2">
                <Link to="/" className="font-semibold text-base px-8 py-3 text-center">Cancel</Link>
                <button type="submit" className="bg-zinc-950 text-base text-white px-8 py-3 text-center rounded-lg font-semibold">Save</button>
            </div>

            <div>
                <label className='pb-2 block text-xl uppercase text-gray-700' htmlFor="title">Title</label>
                <input className="w-full text-xl px-1 py-2 bg-gray-300" type="text" name="title" id="title" value={inputValues.title} onChange={inputHandler} />
            </div>

            <div>
                <label className="pb-2 block text-xl uppercase text-gray-700" htmlFor="description">Description</label>
                <textarea rows={5} className="w-full text-xl px-1 py-2 bg-gray-300" name="description" id="description" value={inputValues.description} onChange={inputHandler}></textarea>
            </div>

            <div>
                <label className="pb-2 block text-xl uppercase text-gray-700" htmlFor="date">Due Date</label>
                <input className="w-full text-xl px-1 py-2 bg-gray-300" type="date" name="date" id="date" value={inputValues.date} onChange={inputHandler} />
            </div>
        </form>


    </section>);
}