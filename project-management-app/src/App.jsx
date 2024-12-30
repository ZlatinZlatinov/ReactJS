import AddProject from "./components/add-project/add-project";
import NoProjects from "./components/no-projects/no-projects";
import ProjectDetails from "./components/project-details/projectDetails";
import Sidebar from "./components/sidebar/sidebar";

import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { deleteProject, getAllProjects } from "./services/projectService";

function App() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getProjects() {
      try {
        const result = await getAllProjects();
        setProjects(result);
      } catch (err) {
        alert(err.message);
      }
    }

    getProjects();
  }, []);

  function updateProjects(project) {
    setProjects(old => [...old, project]);
  }

  async function removeProject(projectId) {
    try {
      await deleteProject(projectId);
      setProjects((old) => old.filter(p => p._id !== projectId));
      //Not sure if filter is a proper way
      navigate('/');
    } catch (err) {
      alert(err.message);
      console.error(err);
    }
  }

  return (
    <main className="flex h-screen">
      <Sidebar data={projects} />
      <Routes>
        <Route path="/" element={<NoProjects />} />
        <Route path="/add" element={<AddProject data={projects} updateProjects={updateProjects} />} />
        <Route path="/details/:projectId" element={<ProjectDetails removeProject={removeProject} />} />
      </Routes>

    </main>
  );
}

export default App;
