import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const isMobile = window.innerWidth < 900;
    const initialWidth = isMobile ? '33%' : '18%'
    // Animation Variants
    const navVariants = {
        initial: { width: `${initialWidth}`, opacity: 0 },
        animate: { 
            width: '100%', 
            opacity: 1,
            transition: { 
                width: { delay: 0.5, duration: 0.8, ease: "circOut" },
                opacity: { duration: 0.5 }
            }
        }
    };

    const linkVariants = {
        initial: { opacity: 0, x: -10 },
        animate: { 
            opacity: 1, 
            x: 0,
            transition: { delay: 1.1, duration: 0.4 } // Starts after expansion
        }
    };

    return (
        <header className='w-full max-w-6xl mx-auto mt-6 px-4'>
            <motion.nav 
                variants={navVariants}
                initial="initial"
                animate="animate"
                className='flex justify-between items-center bg-slate-900/80 backdrop-blur-md text-white mx-auto py-4 px-6 md:py-6 md:px-8 rounded-2xl border border-slate-800 shadow-xl shadow-slate-900 overflow-hidden'
            >
                <NavLink to='/' 
                className='font-display text-4xl md:text-6xl text-blue-500 whitespace-nowrap'>
                    {"<Ali />"}
                </NavLink>

                <motion.div 
                    variants={linkVariants}
                    className='flex gap-4 md:gap-8 font-sans text-lg md:text-2xl whitespace-nowrap'
                >
                    <NavLink to='/projects' 
                        className={({ isActive }) =>
                            `transition-colors ${isActive ? 'text-blue-400' : 'hover:text-blue-400'}`
                        }
                    >
                        Projects
                    </NavLink>

                    <NavLink to='/resume' className={({ isActive }) =>
                            `transition-colors ${isActive ? 'text-blue-400' : 'hover:text-blue-400'}`
                        }
                    >
                        Resume
                    </NavLink>
                </motion.div>
            </motion.nav>
        </header>
    );
};

export default Navbar;