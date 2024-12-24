import AddProject from "./components/add-project/add-project";
import NoProjects from "./components/no-projects/no-projects";
import ProjectDetails from "./components/project-details/projectDetails";
import Sidebar from "./components/sidebar/sidebar";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <main>
      <Sidebar />
      <Routes>
        <Route path="/" element={<NoProjects />} />
        <Route path="/add" element={<AddProject />} />
        <Route path="/details/:projectId" element={<ProjectDetails />} />
      </Routes>

    </main>
  );
}

export default App;
