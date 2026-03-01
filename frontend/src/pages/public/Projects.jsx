import { useProjects } from '../../hooks/useProject';
import LoadingCircleSpinner from '../../components/common/LoadingCircleSpinner';

const Projects = () => {

    const { projects, isLoading, error } = useProjects();

    if (isLoading) return <div><LoadingCircleSpinner /></div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="max-w-6xl mx-auto px-4 py-20 font-sans">
            <h1 className="text-4xl font-bold mb-8">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(project => (
                    <div key={project.id} className="bg-slate-800 p-6 rounded-xl">
                        {/* Map data to ProjectCard here later */}
                        <h2 className="text-xl font-bold text-white">{project.title}</h2>
                        <p className="text-slate-400">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;