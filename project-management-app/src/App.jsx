import AddProject from "./components/add-project/add-project";
import NoProjects from "./components/no-projects/no-projects";
import ProjectDetails from "./components/project-details/projectDetails";
import Sidebar from "./components/sidebar/sidebar";

import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { data } from './data/data';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProjects(data);
    }, 2000);
  }, [data]);

  function updateProjects(project) {
    setProjects(old => [...old, project]);
  }

  return (
    <main className="flex h-screen">
      <Sidebar data={projects} />
      <Routes>
        <Route path="/" element={<NoProjects />} />
        <Route path="/add" element={<AddProject data={projects} updateProjects={updateProjects} />} />
        <Route path="/details/:projectId" element={<ProjectDetails data={projects} />} />
      </Routes>

    </main>
  );
}

export default App;
