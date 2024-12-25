import AddProject from "./components/add-project/add-project";
import NoProjects from "./components/no-projects/no-projects";
import ProjectDetails from "./components/project-details/projectDetails";
import Sidebar from "./components/sidebar/sidebar";

import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { data } from './data/data';

function App() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setProjects(data);
    }, 2000);
  }, [data]);

  function updateProjects(project) {
    setProjects(old => [...old, project]);
  }

  function deleteProject(project) {
    const index = projects.indexOf(project);
    projects.splice(index, 1)
    setProjects(old => projects);
    navigate('/');
  }

  return (
    <main className="flex h-screen">
      <Sidebar data={projects} />
      <Routes>
        <Route path="/" element={<NoProjects />} />
        <Route path="/add" element={<AddProject data={projects} updateProjects={updateProjects} />} />
        <Route path="/details/:projectId" element={<ProjectDetails />} />
      </Routes>

    </main>
  );
}

export default App;
