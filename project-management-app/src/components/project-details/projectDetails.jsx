export default function ProjectDetails() {
    return (<section className="p-12 w-3/4 text-xl">
        <div className="mt-8 flex flex-col gap-8 py-8">
            <div className="flex w-full justify-between">
                <h2 className="text-4xl font-bold">Learing React</h2>
                <button className="hover:text-red-800">Delete</button>
            </div>

            <p className="text-gray-500">Dec 29, 2024</p>
            <p>Learn from the ground up....</p>
        </div>

        <span className="h-1 w-full block bg-gray-300"> </span>

        <div className="mt-5 flex flex-col gap-6">
            <h3 className="text-3xl font-bold">Tasks</h3>
            <form className="flex gap-3 w-full">
                <input className="bg-gray-200 w-1/4 text-lg py-1" type="text" />
                <button type="submit">Add task</button>
            </form>

            <ul className="flex flex-col gap-4 w-full">
                <li className="flex justify-between bg-gray-200 px-4 py-2"><span>Practice, practice</span><button className="hover:text-red-800">Clear</button></li>
                <li className="flex justify-between bg-gray-200 px-4 py-2"><span>Practice, practice</span><button className="hover:text-red-800">Clear</button></li>
            </ul>
        </div>
    </section>)
}