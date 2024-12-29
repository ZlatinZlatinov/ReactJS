import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getId } from '../../utils/getRandomId';
import { addTask, deleteProject, getProjectById } from '../../services/projectService';
//TODO: Implement clearing a task
export default function ProjectDetails() {
    const [project, setProject] = useState(null);
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();
    const [inputValue, inputHandler] = useState({ task: '' });

    const { projectId } = useParams();

    useEffect(() => {
        try {
            async function getProjectDetails() {
                const result = await getProjectById(projectId)
                setProject(result);
                setTasks(result.tasks);
            };

            getProjectDetails();
        } catch (err) {
            alert(err.message);
            console.error(err);
        }
    }, [projectId]);

    async function delProject(projectId) {
        try {
            await deleteProject(projectId);
            navigate('/');
        } catch (err) {
            alert(err.message);
            console.error(err);
        }
    }

    async function addNewTask(e) {
        e.preventDefault();

        try {
            const newTask = await addTask(projectId, inputValue);
            setTasks(old => [...old, newTask]);

            inputHandler({
                id: '',
                task: ''
            });
        } catch (err) {
            alert(err.message);
        }
    }

    return (<section className="p-12 w-3/4 text-xl">
        {project ? <div className="mt-8 flex flex-col gap-8 py-8">
            <div className="flex w-full justify-between">
                <h2 className="text-4xl font-bold">{project.title}</h2>
                <button className="hover:text-red-800" onClick={() => delProject(project._id)}>Delete</button>
            </div>

            <p className="text-gray-500">{project.date}</p>
            <p>{project.description}</p>
        </div> : <div className="mt-8 flex flex-col gap-8 py-8"><p>Loading...</p></div>}

        <span className="h-1 w-full block bg-gray-300"> </span>

        <div className="mt-5 flex flex-col gap-6">
            <h3 className="text-3xl font-bold">Tasks</h3>

            <form className="flex gap-3 w-full" onSubmit={addNewTask}>
                <input
                    className="bg-gray-200 w-1/4 text-lg py-1"
                    type="text"
                    name='task'
                    id='task'
                    value={inputValue.task}
                    onChange={(e) => inputHandler((old) => {

                        return {
                            ...old,
                            [e.target.name]: e.target.value
                        }
                    })} />
                <button type="submit">Add task</button>
            </form>

            <ul className="flex flex-col gap-4 w-full">
                {!tasks[0] ? <li className="flex justify-between bg-gray-200 px-4 py-2"><span>No tasks yet!</span></li> :
                    tasks.map(t => <li key={t._id} className="flex justify-between bg-gray-200 px-4 py-2"><span>{t.task}</span><button className="hover:text-red-800">Clear</button></li>)}
            </ul>
        </div>
    </section>)
}