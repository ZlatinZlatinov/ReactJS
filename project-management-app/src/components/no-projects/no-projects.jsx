import logo from '../../assets/no-projects.png';

export default function NoProjects() {
    return (<section>
        <img src={logo} alt="No Project Selected" />
        <h2>No Project Selected</h2>
        <p>Select a project or get started with new one</p>

        <button>Create new Project</button>
    </section>);
}