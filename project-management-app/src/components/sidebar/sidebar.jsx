import { Link } from "react-router-dom";
//TODO: Update UI, when clearing a Project
export default function Sidebar({data}) {

    return (<aside className="p-4 w-1/5 flex flex-col gap-10 bg-gray-950 text-white text-center">
        <h2 className="uppercase font-bold text-lg pt-11">Your projects</h2>
        <Link to="/add" className="bg-slate-800 p-2 rounded-lg font-semibold">+ Add Project</Link>

        {!data[0] ? <p>Loading...</p> :
            <ul className="flex flex-col gap-3">
                {data.map((p) => {
                    return <li key={p._id}><Link className="text-base" to={`/details/${p._id}`}>{p.title}</Link></li>
                })}
            </ul>}
    </aside>);
}