import { useProjectBySlug } from "../../hooks/useProjectBySlug";
import { useParams } from "react-router-dom";
import LoadingCircleSpinner from '../../components/common/LoadingCircleSpinner';
import ReactMarkdown from 'react-markdown'; // <-- No curly braces here!

const ProjectDetails = () => {
    const { slug } = useParams();
    const { project, isLoading, error } = useProjectBySlug(slug);

    if (isLoading) return <div><LoadingCircleSpinner /></div>;
    if (error) return <div>Error: {error}</div>;
    if (!project) return <div>Project not found.</div>; // Added this safety check!

    return (
        <div className="max-w-6xl mx-auto px-4 py-14 font-sans">
            <h1 className="text-4xl font-bold mb-2 text-white">{project.title}</h1>
            <h3 className="text-xl text-gray-400 mb-4">{project.role}</h3>
            {/* Project main image */}

            <div className='h-[400px] w-full bg-slate-700 rounded-lg mb-6'>image placeholder</div>

            <div className="mb-6">
                <ReactMarkdown>
                    {project.description}
                </ReactMarkdown>
            </div>
            {project.skills.map(skills => (
                <h4 key={skills.id}>{skills.name}</h4>
            ))}
        </div>
    );
};

export default ProjectDetails;