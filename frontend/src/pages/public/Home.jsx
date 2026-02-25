import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <section className='py-20 md:py-32'>
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-5xl md:text-7xl font-bold font-display">
                    Ali Albaqqal
                </h1>

                <TypeAnimation
                    sequence={[
                        'Software Engineer',
                        800,
                        'Full-Stack Developer',
                        800,
                        'AI/ML Enthusiast',
                        800
                    ]}
                    wrapper="span"
                    speed={30}
                    className="text-xl md:text-3xl text-slate-400 mt-4"
                    style={{ display: 'inline-block' }}
                    repeat={Infinity}
                />

                <p className="text-lg md:text-xl text-slate-400 mt-4">
                    My bio isn't bioing yet.
                </p>

                <div className='flex gap-4 mt-8 font-sans'>
                    <Link to='/projects' 
                    className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors'>
                        Projects
                    </Link>
                    <Link to='/resume' 
                    className='bg-slate-600 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors'>
                        Resume
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Home;