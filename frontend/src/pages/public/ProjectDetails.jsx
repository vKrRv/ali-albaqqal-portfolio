import { useProjectBySlug } from "../../hooks/useProjectBySlug";
import { useParams } from "react-router-dom";
import LoadingCircleSpinner from '../../components/common/LoadingCircleSpinner';

const ProjectDetails = () => {
    const { slug } = useParams();
    const { project, isLoading, error } = useProjectBySlug(slug);

    if (isLoading) return <div><LoadingCircleSpinner /></div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="max-w-6xl mx-auto px-4 py-20 font-sans">
            <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
            
        </div>
    );
};

export default ProjectDetails;