import { useEffect } from 'react';
import { fetchProjects } from './api/publicService';
import Navbar from './components/public/Navbar';
import MainLayout from './components/public/MainLayout';
import Footer from './components/public/Footer';


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
    <MainLayout />
  );
}

export default App;