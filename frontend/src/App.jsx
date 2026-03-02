import { useEffect } from 'react';
import { fetchProjects } from './api/publicService';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/public/MainLayout';
import { Home, Projects, ProjectDetails, Resume, NotFound } from './pages/public';


function App() {
  
  // THE BRIDGE TEST
  // This hook runs exactly once when the page loads
  useEffect(() => {
    const getTestData = async () => {
      try {
        const projects = await fetchProjects();
        console.log("🔥 BRIDGE CONNECTED! Data from Postgres via Express:", projects);
      } catch (error) {
        console.error("❌ Bridge failed. Is the backend running?", error);
      }
    };

    getTestData(); // Execute the fetch
  }, []); // The empty array [] ensures this only fires once on mount

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetails />} />
        <Route path="resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;