import { Link } from 'react-router-dom';
import logo from '../../assets/no-projects.png';

export default function NoProjects() {
    return (<section className='text-center flex flex-col p-20 gap-8 items-center h-full w-3/4'>
        <img src={logo} className='w-1/4' alt="No Project Selected" />
        <h2 className='text-xl text-gray-800 font-bold'>No Project Selected</h2>
        <p className='text-gray-600 text-base'>Select a project or get started with new one</p>

        <Link to="/add" className='bg-zinc-950 text-base text-white p-3 rounded-lg font-semibold w-1/4'>Create new project</Link>
    </section>);
}