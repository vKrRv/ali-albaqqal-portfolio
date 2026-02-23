import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-slate-900 text-white p-20'>
            <div className='flex justify-between items-center max-w-6xl mx-auto'>
                <Link to='/' className='font-display text-6xl text-blue-500'>
                    {"<Ali />"}
                </Link>
                <div className='flex gap-6 font-display text-3xl'>
                    <Link to='/projects' className='hover:text-emerald-400 transition-colors'>Projects</Link>
                    <Link to='/experiences' className='hover:text-emerald-400 transition-colors'>Experiences</Link>
                    <Link to='/resume' className='hover:text-emerald-400 transition-colors'>Resume</Link>
                    <Link to='/contact' className='hover:text-emerald-400 transition-colors'>Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;