import { useProjects } from '../../hooks/useProject';
import LoadingCircleSpinner from '../../components/common/LoadingCircleSpinner';
import ProjectCard from '../../components/public/ProjectCard';

const Projects = () => {

    const { projects, isLoading, error } = useProjects();

    if (isLoading) return <div><LoadingCircleSpinner /></div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="max-w-6xl mx-auto px-4 py-20 font-sans">
            <h1 className="text-4xl font-bold mb-8">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            
        </div>
    );
};

export default Projects;