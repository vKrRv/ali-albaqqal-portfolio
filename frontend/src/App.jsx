import { useEffect } from 'react';
import { fetchProjects } from './api/publicService';

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
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center font-sans">
      <h1 className="text-5xl font-bold text-blue-400 mb-4">
        Frontend Initiated 🚀
      </h1>
      <p className="text-slate-300 text-lg">
        React 19 + Vite 7 + Tailwind CSS v3 + React Router + Axios
      </p>
      
      {/* New test message! */}
      <div className="mt-8 p-6 bg-slate-800 rounded-lg border border-slate-700 text-center shadow-lg">
        <p className="text-emerald-400 font-semibold animate-pulse text-xl">
          📡 Testing API Connection...
        </p>
        <p className="text-slate-400 mt-2">
          Open your browser console (F12 or Right Click -&gt; Inspect) to see your database data!
        </p>
      </div>
    </div>
  );
}

export default App;