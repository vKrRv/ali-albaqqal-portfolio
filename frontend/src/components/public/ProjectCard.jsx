import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {

    return (
        <Link to={`/projects/${project.slug}`} className="card">
            {/*project.image*/}
            <div className='h-[200px] w-full bg-slate-500 rounded-lg'>image placeholder</div>
            <h3 className='text-xl md:text-2xl mt-5'>{project.title}</h3>
            <p>{project.short_description}</p>
        </Link>
    );
};

export default ProjectCard