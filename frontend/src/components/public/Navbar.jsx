import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='bg-slate-900 text-white p-10 max-w-6xl mx-auto px-4 w-full'>
            <nav className='flex justify-between items-center'>
                <NavLink to='/' 
                className='font-display text-6xl text-blue-500'>
                    {"<Ali />"}
                </NavLink>

                <div className='flex gap-6 font-display text-3xl'>
                    <NavLink to='/projects' 
                        className={({ isActive }) =>
                            `transition-colors ${isActive ? 'text-emerald-400' : 'hover:text-emerald-400'}`
                        }
                    >
                        Projects
                    </NavLink>

                    <NavLink to='/resume' className={({ isActive }) =>
                            `transition-colors ${isActive ? 'text-emerald-400' : 'hover:text-emerald-400'}`
                        }
                    >
                        Resume
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;