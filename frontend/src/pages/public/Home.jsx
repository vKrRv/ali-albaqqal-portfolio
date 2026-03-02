import { useProfile } from '../../hooks/useProfile';
import LoadingCircleSpinner from '../../components/common/LoadingCircleSpinner';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {

    const { profile, isLoading, error } = useProfile();

    if (isLoading) return <div><LoadingCircleSpinner /></div>;
    if (error) return <div>Error: {error}</div>;

    const { name, title, bio, resume_pdf_url } = profile;

    return (
        <section className='py-20 md:py-32'>
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-5xl md:text-7xl font-bold font-display">
                    {name}
                </h1>

                <TypeAnimation
                    sequence={[
                        title[0],
                        800,
                        title[1],
                        800,
                        title[2],
                        800
                    ]}
                    wrapper="span"
                    speed={30}
                    className="text-xl md:text-3xl text-slate-400 mt-4"
                    style={{ display: 'inline-block' }}
                    repeat={Infinity}
                />

                <p className="text-lg md:text-xl text-slate-400 mt-4">
                    {bio}
                </p>

                <div className='flex gap-4 mt-8 font-sans'>
                    <Link to='/projects' 
                    className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors'>
                        Projects
                    </Link>
                    <a
                    href={resume_pdf_url}
                    target='_blank'
                    className='bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors'>
                        Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;