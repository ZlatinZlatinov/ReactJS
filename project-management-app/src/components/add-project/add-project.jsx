import { Link } from "react-router-dom";

export default function AddProject() {
    return (<section className="flex flex-col items-center p-10 gap-12 w-3/4 mt-5">
        <h2 className="text-3xl font-semibold text-gray-700">Add new project</h2>

        <form className="w-full flex flex-col gap-5 mt-5">
            <div className="self-end flex gap-2">
                <Link to="/" className="font-semibold text-base px-8 py-3 text-center">Cancel</Link>
                <button type="submit" className="bg-zinc-950 text-base text-white px-8 py-3 text-center rounded-lg font-semibold">Save</button>
            </div>

            <div>
                <label className='pb-2 block text-xl uppercase text-gray-700' htmlFor="title">Title</label>
                <input className="w-full text-xl px-1 py-2 bg-gray-300" type="text" name="title" id="title" />
            </div>

            <div>
                <label className="pb-2 block text-xl uppercase text-gray-700" htmlFor="description">Description</label>
                <textarea rows={5} className="w-full text-xl px-1 py-2 bg-gray-300" name="description" id="description"></textarea>
            </div>

            <div>
                <label className="pb-2 block text-xl uppercase text-gray-700" htmlFor="dueDate">Due Date</label>
                <input className="w-full text-xl px-1 py-2 bg-gray-300" type="date" name="dueDate" id="dueDate" />
            </div>
        </form>


    </section>);
}