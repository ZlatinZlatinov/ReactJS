import { Link } from "react-router-dom";
//TODO: Update UI, when clearing a Project
export default function Sidebar({data}) {

    return (<aside className="p-4 w-1/5 flex flex-col gap-10 bg-stone-900 text-stone-200 text-center h-auto">
        <h2 className="uppercase font-bold text-lg md:text-xl pt-11">Your projects</h2>
        <Link to="/add" className="bg-stone-700 hover:bg-stone-600 hover:text-stone-100 py-2 rounded-lg font-semibold">+ Add Project</Link>

        {!data[0] ? <p>Loading...</p> :
            <ul className="flex flex-col gap-3">
                {data.map((p) => {
                    return <li key={p._id}><Link className="text-base" to={`/details/${p._id}`}>{p.title}</Link></li>
                })}
            </ul>}
    </aside>);
}