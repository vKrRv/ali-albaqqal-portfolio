import { motion } from 'framer-motion';

const EnterAnimation = ({ children, delay = 0, direction = 'up', fullWidth = false }) => {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
            x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
        }
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
                duration: 0.6,
                delay: delay,
                ease: [0.25, 1, 0.5, 1], // Custom cubic-bezier for a "sleek" feel
            }}
            className={fullWidth ? 'w-full' : ''}
        >
            {children}
        </motion.div>
    );
};

export default EnterAnimation;